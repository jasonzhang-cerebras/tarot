"use client"

import { motion } from "framer-motion"
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
    <div
      className={`relative ${sizeClasses[size]} cursor-pointer`}
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border-2 border-yellow-500 shadow-lg flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-3/4 h-3/4 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-yellow-500/20" />
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-yellow-600 shadow-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover"
            style={{ transform: isReversed ? "rotate(180deg)" : "rotate(0deg)" }}
            onError={(e) => {
              e.currentTarget.src = "/placeholder-card.svg"
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
