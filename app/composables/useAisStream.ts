import { ref, shallowRef, onUnmounted, computed } from 'vue'

export interface AISStreamMessage {
  MessageType: string
  MetaData: {
    MMSI: number
    ShipName?: string
    latitude: number
    longitude: number
    time_utc: string
  }
  Message: Record<string, any>
}

type TokenFetcher = () => Promise<string>

export function useAisStream (opts: {
  getToken?: TokenFetcher,
  url?: string,
  bufferSize?: number,
  autoReconnect?: boolean,
  reconnectDelayMs?: number
} = {}) {
  const {
    getToken,
    url,
    bufferSize = 200,
    autoReconnect = true,
    reconnectDelayMs = 1500,
  } = opts

  const ws = shallowRef<WebSocket | null>(null)
  const isConnecting = ref(false)
  const isConnected = ref(false)
  const error = ref<unknown>(null)
  const lastPingAt = ref<number | null>(null)
  const messages = ref<AISStreamMessage[]>([])

  let stopped = false
  let reconnectTimer: number | null = null

  function pushMessage(msg: AISStreamMessage) {
    messages.value.push(msg)
    if (messages.value.length > bufferSize) {
      messages.value.splice(0, messages.value.length - bufferSize)
    }
  }

  async function getEndpoint(): Promise<string> {
    if (url) return url
    if (getToken) {
      const token = await getToken()
      return `wss://ais.xplor.example/ws?token=${encodeURIComponent(token)}`
    }
    throw new Error('useAisStream: either url or getToken must be provided')
  }

  async function connect() {
    if (isConnecting.value || isConnected.value) return
    stopped = false
    isConnecting.value = true
    error.value = null

    try {
      const endpoint = await getEndpoint()
      const socket = new WebSocket(endpoint)
      ws.value = socket

      socket.onopen = () => {
        isConnecting.value = false
        isConnected.value = true
      }

      socket.onmessage = (ev) => {
        lastPingAt.value = Date.now()
        try {
          const parsed = JSON.parse(ev.data) as AISStreamMessage
          pushMessage(parsed)
        } catch {}
      }

      socket.onerror = (ev) => { error.value = ev }

      socket.onclose = () => {
        isConnected.value = false
        ws.value = null
        if (!stopped && autoReconnect) {
          if (reconnectTimer) clearTimeout(reconnectTimer as any)
          reconnectTimer = window.setTimeout(connect, reconnectDelayMs)
        }
      }
    } catch (e) {
      isConnecting.value = false
      error.value = e
      if (!stopped && autoReconnect) {
        if (reconnectTimer) clearTimeout(reconnectTimer as any)
        reconnectTimer = window.setTimeout(connect, reconnectDelayMs)
      }
    }
  }

  function disconnect() {
    stopped = true
    if (reconnectTimer) { clearTimeout(reconnectTimer as any); reconnectTimer = null }
    ws.value?.close()
    ws.value = null
    isConnected.value = false
    isConnecting.value = false
  }

  const latest = computed(() => messages.value[messages.value.length - 1])
  onUnmounted(disconnect)

  return { isConnecting, isConnected, error, lastPingAt, messages, latest, connect, disconnect }
}