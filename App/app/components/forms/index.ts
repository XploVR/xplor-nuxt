// src/components/Forms/index.ts
import type { App, Component } from 'vue'

// Eagerly import all .vue files in this folder (and subfolders)
const modules = import.meta.glob('./**/*.vue', { eager: true }) as Record<
  string,
  { default: Component }
>

// Convert a filename to PascalCase (e.g., "heritage-worship-form.vue" -> "HeritageWorshipForm")
function toPascalCase(file: string) {
  const base = file.replace(/\.[^.]+$/, '') // remove extension
  return base
    .split(/[\/\\]/)
    .pop()!
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

// Build a map: { FormName: Component }
const Forms: Record<string, Component> = {}
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split('/').pop()!                   // e.g., "HeritageWorshipForm.vue"
  const name = toPascalCase(filename)                       // e.g., "HeritageWorshipForm"
  Forms[name] = mod.default
}

export default Forms

// Optional helpers
export type FormComponentMap = typeof Forms
export function getForm(name: string): Component | undefined {
  return Forms[name]
}
export function registerForms(app: App, opts?: { prefix?: string }) {
  const prefix = opts?.prefix ?? ''
  for (const [name, comp] of Object.entries(Forms)) {
    app.component(prefix + name, comp)
  }
}
