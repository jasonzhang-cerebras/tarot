"use client"

import { motion } from "framer-motion"
import { TarotCard } from "@/types/tarot"
import { Card } from "./card"

interface CardDeckProps {
  cards: TarotCard[]
  onCardClick?: (card: TarotCard) => void
  size?: "sm" | "md" | "lg"
  maxVisible?: number
}

export function CardDeck({ cards, onCardClick, size = "md", maxVisible = 5 }: CardDeckProps) {
  const visibleCards = cards.slice(0, maxVisible)
  const remainingCount = Math.max(0, cards.length - maxVisible)

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 justify-center">
        {visibleCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card card={card} size={size} showBack onClick={() => onCardClick?.(card)} />
          </motion.div>
        ))}

        {remainingCount > 0 && (
          <motion.div
            className="flex items-center justify-center bg-purple-900 text-yellow-500 rounded-lg border-2 border-yellow-500 font-bold"
            style={{
              width: size === "sm" ? "96px" : size === "md" ? "128px" : "160px",
              height: size === "sm" ? "144px" : size === "md" ? "192px" : "240px",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            +{remainingCount}
          </motion.div>
        )}
      </div>
    </div>
  )
}
