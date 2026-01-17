import { Reading, TarotCard } from "@/types/tarot"
import { tarotCards } from "./tarot-data"

export function exportReadingToText(reading: Reading, userName?: string): string {
  const lines: string[] = []

  lines.push("═══════════════════════════════════════")
  lines.push("           TAROT READING")
  lines.push("═══════════════════════════════════════")
  lines.push("")

  if (userName) {
    lines.push(`Reading for: ${userName}`)
    lines.push("")
  }

  lines.push(`Date: ${new Date(reading.date).toLocaleDateString()}`)
  lines.push(`Spread: ${reading.spread}`)
  lines.push("")
  lines.push("───────────────────────────────────────")
  lines.push("")

  reading.cards.forEach((cardData) => {
    const card = tarotCards.find((c: TarotCard) => c.id === cardData.cardId)
    if (card) {
      lines.push(`${cardData.position}:`)
      lines.push(`  Card: ${card.name}`)
      lines.push(`  Position: ${cardData.isReversed ? "Reversed" : "Upright"}`)
      lines.push(`  Meaning: ${cardData.isReversed ? card.reversed.meaning : card.upright.meaning}`)
      lines.push("")
    }
  })

  lines.push("───────────────────────────────────────")
  lines.push("")
  lines.push("May the cards guide your path ✨")
  lines.push("")
  lines.push("═══════════════════════════════════════")

  return lines.join("\n")
}

export function exportDailyCardToText(card: TarotCard, userName?: string, zodiacSign?: string): string {
  const lines: string[] = []

  lines.push("═══════════════════════════════════════")
  lines.push("         TAROT OF THE DAY")
  lines.push("═══════════════════════════════════════")
  lines.push("")

  if (userName) {
    lines.push(`For: ${userName}`)
    if (zodiacSign) {
      lines.push(`Zodiac: ${zodiacSign}`)
    }
    lines.push("")
  }

  lines.push(`Date: ${new Date().toLocaleDateString()}`)
  lines.push("")
  lines.push("───────────────────────────────────────")
  lines.push("")
  lines.push("Your Card for Today:")
  lines.push(`  ${card.name}`)
  lines.push("")
  lines.push("Positive Meaning:")
  lines.push(`  ${card.upright.meaning}`)
  lines.push("")
  lines.push("───────────────────────────────────────")
  lines.push("")
  lines.push("May this card bring you guidance ✨")
  lines.push("")
  lines.push("═══════════════════════════════════════")

  return lines.join("\n")
}

export function exportHistoryToText(readings: Reading[], userName?: string): string {
  const lines: string[] = []

  lines.push("═══════════════════════════════════════")
  lines.push("         READING HISTORY")
  lines.push("═══════════════════════════════════════")
  lines.push("")

  if (userName) {
    lines.push(`History for: ${userName}`)
    lines.push("")
  }

  lines.push(`Total Readings: ${readings.length}`)
  lines.push("")
  lines.push("───────────────────────────────────────")
  lines.push("")

  readings.forEach((reading, index) => {
    const cardNames = reading.cards
      .map((cardData) => {
        const card = tarotCards.find((c: TarotCard) => c.id === cardData.cardId)
        return card ? card.name : "Unknown"
      })
      .join(", ")

    lines.push(`Reading #${index + 1}`)
    lines.push(`  Date: ${new Date(reading.date).toLocaleDateString()}`)
    lines.push(`  Spread: ${reading.spread}`)
    lines.push(`  Cards: ${cardNames}`)
    lines.push("")
  })

  lines.push("───────────────────────────────────────")
  lines.push("")
  lines.push("═══════════════════════════════════════")

  return lines.join("\n")
}

export function downloadTextFile(text: string, filename: string) {
  const blob = new Blob([text], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
