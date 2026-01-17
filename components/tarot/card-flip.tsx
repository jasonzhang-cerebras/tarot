"use client"

import { motion, AnimatePresence } from "framer-motion"
import { TarotCard } from "@/types/tarot"
import { useState } from "react"

interface CardFlipProps {
  card: TarotCard
  isReversed?: boolean
  onFlip?: () => void
  size?: "sm" | "md" | "lg"
}

export function CardFlip({ card, isReversed = false, onFlip, size = "md" }: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const sizeClasses = {
    sm: "w-24 h-36",
    md: "w-32 h-48",
    lg: "w-40 h-60",
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    onFlip?.()
  }

  return (
    <div className={`relative ${sizeClasses[size]} cursor-pointer`} onClick={handleFlip}>
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="back"
            className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border-2 border-yellow-500 shadow-lg flex items-center justify-center"
            initial={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-3/4 h-3/4 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full bg-yellow-500/20" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-400 shadow-lg overflow-hidden"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: isReversed ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-card.png"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
