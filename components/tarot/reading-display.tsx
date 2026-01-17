"use client"

import { motion } from "framer-motion"
import { Spread } from "@/types/tarot"
import { Card } from "./card"
import { TarotCard } from "@/types/tarot"

interface ReadingDisplayProps {
  spread: Spread
  cards: Array<{ card: TarotCard; isReversed: boolean }>
}

export function ReadingDisplay({ spread, cards }: ReadingDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-3xl font-bold text-purple-900 font-cinzel">{spread.name}</h2>
      <p className="text-purple-700 text-center max-w-2xl">{spread.description}</p>

      <div className="relative w-full max-w-4xl min-h-[500px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-300 p-8">
        {cards.map((cardData, index) => {
          const position = spread.positions[index]
          if (!position) return null

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center gap-2 relative">
                <motion.div
                  className="absolute inset-0 bg-purple-400/30 blur-2xl rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <div className="relative">
                  <Card card={cardData.card} isReversed={cardData.isReversed} size="md" />
                </div>
                <div className="bg-white/90 rounded-lg p-2 shadow-md max-w-[200px]">
                  <p className="text-sm font-semibold text-purple-900 text-center">{position.name}</p>
                  <p className="text-xs text-purple-700 text-center mt-1">
                    {cardData.isReversed ? cardData.card.reversed.meaning : cardData.card.upright.meaning}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
