import { TarotCard } from "@/types/tarot"

export function shuffleDeck(deck: TarotCard[]): TarotCard[] {
  const shuffled = [...deck]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

export function drawCards(deck: TarotCard[], count: number): TarotCard[] {
  const shuffled = shuffleDeck(deck)
  return shuffled.slice(0, count)
}

export function drawCard(deck: TarotCard[]): TarotCard {
  const shuffled = shuffleDeck(deck)
  return shuffled[0]
}

export function isCardReversed(): boolean {
  return Math.random() < 0.5
}

export function shuffleWithAnimation(deck: TarotCard[], iterations: number = 7): TarotCard[] {
  let shuffled = [...deck]

  for (let i = 0; i < iterations; i++) {
    shuffled = shuffleDeck(shuffled)
  }

  return shuffled
}

export function cutDeck(deck: TarotCard[]): { top: TarotCard[]; bottom: TarotCard[] } {
  const cutPoint = Math.floor(Math.random() * deck.length)
  return {
    top: deck.slice(0, cutPoint),
    bottom: deck.slice(cutPoint),
  }
}

export function combineDecks(deck1: TarotCard[], deck2: TarotCard[]): TarotCard[] {
  return [...deck1, ...deck2]
}
