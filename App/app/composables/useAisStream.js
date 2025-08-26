import { ref, shallowRef, onUnmounted, computed } from 'vue';
export function useAisStream(opts = {}) {
    const { getToken, url, bufferSize = 200, autoReconnect = true, reconnectDelayMs = 1500, } = opts;
    const ws = shallowRef(null);
    const isConnecting = ref(false);
    const isConnected = ref(false);
    const error = ref(null);
    const lastPingAt = ref(null);
    const messages = ref([]);
    let stopped = false;
    let reconnectTimer = null;
    function pushMessage(msg) {
        messages.value.push(msg);
        if (messages.value.length > bufferSize) {
            messages.value.splice(0, messages.value.length - bufferSize);
        }
    }
    async function getEndpoint() {
        if (url)
            return url;
        if (getToken) {
            const token = await getToken();
            return `wss://ais.xplor.example/ws?token=${encodeURIComponent(token)}`;
        }
        throw new Error('useAisStream: either url or getToken must be provided');
    }
    async function connect() {
        if (isConnecting.value || isConnected.value)
            return;
        stopped = false;
        isConnecting.value = true;
        error.value = null;
        try {
            const endpoint = await getEndpoint();
            const socket = new WebSocket(endpoint);
            ws.value = socket;
            socket.onopen = () => {
                isConnecting.value = false;
                isConnected.value = true;
            };
            socket.onmessage = (ev) => {
                lastPingAt.value = Date.now();
                try {
                    const parsed = JSON.parse(ev.data);
                    pushMessage(parsed);
                }
                catch { }
            };
            socket.onerror = (ev) => { error.value = ev; };
            socket.onclose = () => {
                isConnected.value = false;
                ws.value = null;
                if (!stopped && autoReconnect) {
                    if (reconnectTimer)
                        clearTimeout(reconnectTimer);
                    reconnectTimer = window.setTimeout(connect, reconnectDelayMs);
                }
            };
        }
        catch (e) {
            isConnecting.value = false;
            error.value = e;
            if (!stopped && autoReconnect) {
                if (reconnectTimer)
                    clearTimeout(reconnectTimer);
                reconnectTimer = window.setTimeout(connect, reconnectDelayMs);
            }
        }
    }
    function disconnect() {
        stopped = true;
        if (reconnectTimer) {
            clearTimeout(reconnectTimer);
            reconnectTimer = null;
        }
        ws.value?.close();
        ws.value = null;
        isConnected.value = false;
        isConnecting.value = false;
    }
    const latest = computed(() => messages.value[messages.value.length - 1]);
    onUnmounted(disconnect);
    return { isConnecting, isConnected, error, lastPingAt, messages, latest, connect, disconnect };
}
