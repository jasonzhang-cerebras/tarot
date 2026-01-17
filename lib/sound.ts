import { Howl } from "howler"

export type SoundType = "shuffle" | "flip" | "draw" | "reveal" | "success" | "error"

interface SoundConfig {
  shuffle: string
  flip: string
  draw: string
  reveal: string
  success: string
  error: string
}

class SoundManager {
  private sounds: Map<SoundType, Howl> = new Map()
  private enabled: boolean = true
  private config: SoundConfig

  constructor(config: SoundConfig) {
    this.config = config
    this.loadSounds()
  }

  private loadSounds() {
    const soundTypes: SoundType[] = ["shuffle", "flip", "draw", "reveal", "success", "error"]

    soundTypes.forEach((type) => {
      const sound = new Howl({
        src: [this.config[type]],
        volume: 0.5,
        preload: true,
      })
      this.sounds.set(type, sound)
    })
  }

  play(type: SoundType) {
    if (!this.enabled) return

    const sound = this.sounds.get(type)
    if (sound) {
      sound.play()
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled
  }

  isEnabled(): boolean {
    return this.enabled
  }

  stop(type: SoundType) {
    const sound = this.sounds.get(type)
    if (sound) {
      sound.stop()
    }
  }

  stopAll() {
    this.sounds.forEach((sound) => sound.stop())
  }
}

let soundManager: SoundManager | null = null

export function initSoundManager(config: SoundConfig) {
  if (!soundManager) {
    soundManager = new SoundManager(config)
  }
  return soundManager
}

export function getSoundManager(): SoundManager | null {
  return soundManager
}

export function playSound(type: SoundType) {
  soundManager?.play(type)
}

export function setSoundEnabled(enabled: boolean) {
  soundManager?.setEnabled(enabled)
}

export function isSoundEnabled(): boolean {
  return soundManager?.isEnabled() ?? true
}
