export interface TarotCard {
  id: string
  name: string
  number: number
  type: "major" | "minor"
  suit?: "wands" | "cups" | "swords" | "pentacles"
  court?: "page" | "knight" | "queen" | "king"
  image: string
  keywords: string[]
  upright: {
    meaning: string
    keywords: string[]
    description: string
  }
  reversed: {
    meaning: string
    keywords: string[]
    description: string
  }
}

export interface DailyCard {
  date: string
  card: TarotCard
  positiveMeaning: string
  bestWishes: string
  zodiacSign: string
}

export interface Reading {
  id: string
  date: Date
  spread: string
  cards: {
    cardId: string
    position: string
    isReversed: boolean
  }[]
  meaningSource: string
}

export interface Spread {
  id: string
  name: string
  description: string
  cardCount: number
  positions: SpreadPosition[]
  layout: "linear" | "cross" | "circle" | "custom"
}

export interface SpreadPosition {
  id: string
  name: string
  description: string
  x: number
  y: number
}

export interface MeaningCache {
  source: string
  data: any
  timestamp: number
}
