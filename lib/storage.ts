const STORAGE_KEYS = {
  HISTORY: "tarot_history",
  DAILY_CARD: "tarot_daily_card",
  USER_NAME: "tarot_user_name",
  SOUND_ENABLED: "tarot_sound_enabled",
  MEANING_CACHE: "tarot_meaning_cache",
} as const

const MAX_HISTORY_ITEMS = 22

export function getHistory() {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY)
    if (!stored) return []

    const history = JSON.parse(stored)
    return Array.isArray(history) ? history : []
  } catch (error) {
    console.error("Error reading history from localStorage:", error)
    return []
  }
}

export function saveHistory(history: any[]) {
  if (typeof window === "undefined") return

  try {
    const trimmedHistory = history.slice(0, MAX_HISTORY_ITEMS)
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(trimmedHistory))
  } catch (error) {
    console.error("Error saving history to localStorage:", error)
  }
}

export function addToHistory(reading: any) {
  const history = getHistory()
  const updatedHistory = [reading, ...history]
  saveHistory(updatedHistory)
}

export function clearHistory() {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY)
  } catch (error) {
    console.error("Error clearing history from localStorage:", error)
  }
}

export function getDailyCard() {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.DAILY_CARD)
    if (!stored) return null

    return JSON.parse(stored)
  } catch (error) {
    console.error("Error reading daily card from localStorage:", error)
    return null
  }
}

export function saveDailyCard(dailyCard: any) {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEYS.DAILY_CARD, JSON.stringify(dailyCard))
  } catch (error) {
    console.error("Error saving daily card to localStorage:", error)
  }
}

export function getUserName() {
  if (typeof window === "undefined") return ""

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_NAME)
    return stored || ""
  } catch (error) {
    console.error("Error reading user name from localStorage:", error)
    return ""
  }
}

export function saveUserName(name: string) {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, name)
  } catch (error) {
    console.error("Error saving user name to localStorage:", error)
  }
}

export function getSoundEnabled() {
  if (typeof window === "undefined") return true

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SOUND_ENABLED)
    return stored === null ? true : stored === "true"
  } catch (error) {
    console.error("Error reading sound enabled from localStorage:", error)
    return true
  }
}

export function saveSoundEnabled(enabled: boolean) {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, String(enabled))
  } catch (error) {
    console.error("Error saving sound enabled to localStorage:", error)
  }
}

export function getMeaningCache() {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.MEANING_CACHE)
    if (!stored) return {}

    const cache = JSON.parse(stored)
    return typeof cache === "object" ? cache : {}
  } catch (error) {
    console.error("Error reading meaning cache from localStorage:", error)
    return {}
  }
}

export function saveMeaningCache(cache: Record<string, any>) {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEYS.MEANING_CACHE, JSON.stringify(cache))
  } catch (error) {
    console.error("Error saving meaning cache to localStorage:", error)
  }
}

export function clearMeaningCache() {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(STORAGE_KEYS.MEANING_CACHE)
  } catch (error) {
    console.error("Error clearing meaning cache from localStorage:", error)
  }
}

export function isCacheValid(timestamp: number, maxAge: number = 7 * 24 * 60 * 60 * 1000) {
  const now = Date.now()
  return now - timestamp < maxAge
}
