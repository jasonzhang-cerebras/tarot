import { initSoundManager } from "@/lib/sound"

// Sound configuration for the Tarot application
export const soundConfig = {
  shuffle: "/sounds/shuffle.mp3",
  flip: "/sounds/flip.mp3",
  draw: "/sounds/flip.mp3",
  reveal: "/sounds/reveal.mp3",
  success: "/sounds/reveal.mp3",
  error: "/sounds/flip.mp3",
}

// Initialize sound manager on client side only
export function initializeSounds() {
  if (typeof window !== "undefined") {
    initSoundManager(soundConfig)
  }
}
