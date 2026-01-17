"use client"

import { motion } from "framer-motion"
import { TarotCard } from "@/types/tarot"
import { useState } from "react"

interface CardProps {
  card: TarotCard
  isReversed?: boolean
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  showBack?: boolean
}

export function Card({ card, isReversed = false, onClick, size = "md", showBack = false }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "w-24 h-36",
    md: "w-32 h-48",
    lg: "w-40 h-60",
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} cursor-pointer`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        rotate: isReversed ? 180 : 0,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {showBack ? (
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border-2 border-yellow-500 shadow-lg flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-yellow-500/20" />
          </div>
        </div>
      ) : (
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-yellow-600 shadow-lg overflow-hidden">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-card.svg"
            }}
          />
        </div>
      )}

      {isHovered && !showBack && (
        <motion.div
          className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-white text-center p-2">
            <p className="font-bold text-sm">{card.name}</p>
            <p className="text-xs mt-1">{isReversed ? "Reversed" : "Upright"}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
