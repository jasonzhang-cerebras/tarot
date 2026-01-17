"use client"

import { motion } from "framer-motion"
import { TarotCard } from "@/types/tarot"
import { CardFlip } from "./card-flip"

interface ShuffleAnimationProps {
  cards: TarotCard[]
  onComplete: () => void
}

export function ShuffleAnimation({ cards, onComplete }: ShuffleAnimationProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[600px]">
      <motion.h2
        className="text-3xl font-bold text-purple-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Shuffling the Cards...
      </motion.h2>

      <div className="relative w-full max-w-4xl h-[400px]">
        {cards.map((card, index) => {
          const angle = (index / cards.length) * 360
          const radius = 150
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <motion.div
              key={card.id}
              className="absolute left-1/2 top-1/2"
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                x,
                y,
                rotate: angle,
                opacity: 1,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                type: "spring",
              }}
              onAnimationComplete={() => {
                if (index === cards.length - 1) {
                  setTimeout(onComplete, 500)
                }
              }}
            >
              <CardFlip card={card} size="sm" />
            </motion.div>
          )
        })}
      </div>

      <motion.p
        className="text-purple-700 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Focus on your question...
      </motion.p>
    </div>
  )
}
