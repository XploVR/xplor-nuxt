import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * Merge Tailwind classes conditionally.
 * This utility is framework-agnostic and works in Vue, React, etc.
 *
 * Usage (Vue):
 *   <div :class="cn('p-4', isActive && 'bg-primary')" />
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
