"use client"

import { motion } from "framer-motion"
import { DailyCard } from "@/types/tarot"
import { Card } from "./card"
import { Sparkles, Star } from "lucide-react"

interface DailyCardDisplayProps {
  dailyCard: DailyCard
}

export function DailyCardDisplay({ dailyCard }: DailyCardDisplayProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 text-yellow-500">
        <Sparkles className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Tarot of the Day</h2>
        <Sparkles className="h-6 w-6" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card card={dailyCard.card} size="lg" />
      </motion.div>

      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-bold text-purple-900 mb-2">{dailyCard.card.name}</h3>
        <p className="text-purple-700 mb-4">{dailyCard.positiveMeaning}</p>

        <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
          <div className="flex items-center justify-center gap-2 text-purple-900 mb-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="font-semibold">Best Wishes</span>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-purple-800 italic">{dailyCard.bestWishes}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
