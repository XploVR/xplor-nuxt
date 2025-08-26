// src/components/dialogs/index.ts
import type { App, Component } from 'vue'

// Eagerly import every .vue file in this folder (and subfolders)
const modules = import.meta.glob('./**/*.vue', { eager: true }) as Record<
  string,
  { default: Component }
>

// Convert "my-dialog.vue" -> "MyDialog"
function toPascalCase(file: string) {
  const base = file.replace(/\.[^.]+$/, '') // strip extension
  return base
    .split(/[\/\\]/)
    .pop()!
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

// Build a map: { DialogName: Component }
const Dialogs: Record<string, Component> = {}
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split('/').pop()!            // e.g., "CarUploadDialog.vue"
  const name = toPascalCase(filename)                // e.g., "CarUploadDialog"
  Dialogs[name] = mod.default
}

export default Dialogs

// Optional helpers
export type DialogComponentMap = typeof Dialogs
export function getDialog(name: string): Component | undefined {
  return Dialogs[name]
}
export function registerDialogs(app: App, opts?: { prefix?: string }) {
  const prefix = opts?.prefix ?? ''
  for (const [name, comp] of Object.entries(Dialogs)) {
    app.component(prefix + name, comp)
  }
}
