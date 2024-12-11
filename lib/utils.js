import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}


export function absoluteUrl(path) {
  // NEXT_PUBLIC_NEXT_URL = http://localhost:3000/
  return `${process.env.NEXT_PUBLIC_NEXT_URL}${path}`
}