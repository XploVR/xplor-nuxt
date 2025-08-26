import { type ClassValue } from 'clsx';
/**
 * Merge Tailwind classes conditionally.
 * This utility is framework-agnostic and works in Vue, React, etc.
 *
 * Usage (Vue):
 *   <div :class="cn('p-4', isActive && 'bg-primary')" />
 */
export declare function cn(...inputs: ClassValue[]): any;
