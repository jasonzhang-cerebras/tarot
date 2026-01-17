import { TarotCard } from "@/types/tarot"
import { tarotCards } from "./tarot-data"
import { getZodiacSign, getZodiacSymbol } from "./zodiac"
import { getDailyCard, saveDailyCard } from "./storage"

export function generateDailyCard(date: Date = new Date()): any {
  const dateString = date.toISOString().split("T")[0]
  const zodiacSign = getZodiacSign(date)
  const zodiacSymbol = getZodiacSymbol(zodiacSign)

  const seed = dateString + zodiacSign
  const hash = simpleHash(seed)
  const cardIndex = hash % tarotCards.length
  const card = tarotCards[cardIndex]

  const positiveMeaning = extractPositiveMeaning(card)
  const bestWishes = generateBestWishes(card, zodiacSign)

  const dailyCard = {
    date: dateString,
    card,
    positiveMeaning,
    bestWishes,
    zodiacSign,
    zodiacSymbol,
  }

  return dailyCard
}

export function getTodaysDailyCard(zodiacSign?: string): any {
  const today = new Date()
  const todayString = today.toISOString().split("T")[0]

  const cached = getDailyCard()
  if (cached && cached.date === todayString) {
    return cached
  }

  const dailyCard = generateDailyCard(today)
  saveDailyCard(dailyCard)

  return dailyCard
}

function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

function extractPositiveMeaning(card: TarotCard): string {
  const positiveKeywords = [
    "success",
    "growth",
    "opportunity",
    "abundance",
    "joy",
    "love",
    "harmony",
    "balance",
    "wisdom",
    "creativity",
    "strength",
    "courage",
    "hope",
    "inspiration",
    "peace",
    "healing",
    "transformation",
    "new beginnings",
    "clarity",
    "achievement",
    "prosperity",
    "happiness",
    "fulfillment",
  ]

  const uprightKeywords = card.upright.keywords
  const matchingKeywords = uprightKeywords.filter((keyword) =>
    positiveKeywords.some((positive) => keyword.toLowerCase().includes(positive.toLowerCase())),
  )

  if (matchingKeywords.length > 0) {
    return `Today, ${card.name} brings you ${matchingKeywords.join(", ")}. ${card.upright.meaning}`
  }

  return `Today, ${card.name} offers guidance: ${card.upright.meaning}`
}

function generateBestWishes(card: TarotCard, zodiacSign: string): string {
  const wishes = [
    `May the energy of ${card.name} illuminate your path today, ${zodiacSign}.`,
    `Wishing you clarity and wisdom as you embrace the message of ${card.name}.`,
    `May ${card.name} guide you toward your highest potential today.`,
    `Trust in the journey that ${card.name} reveals for you today.`,
    `May the wisdom of ${card.name} bring peace and inspiration to your day.`,
  ]

  const randomIndex = Math.floor(Math.random() * wishes.length)
  return wishes[randomIndex]
}

export function isDailyCardExpired(date?: string): boolean {
  const cached = getDailyCard()
  if (!cached) return true

  const today = date || new Date().toISOString().split("T")[0]

  return cached.date !== today
}
