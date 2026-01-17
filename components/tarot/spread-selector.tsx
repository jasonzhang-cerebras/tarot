"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Spread } from "@/types/tarot"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"

interface SpreadSelectorProps {
  spreads: Spread[]
  onSelect: (spread: Spread) => void
}

export function SpreadSelector({ spreads, onSelect }: SpreadSelectorProps) {
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null)

  const handleSelect = (spread: Spread) => {
    setSelectedSpread(spread)
    onSelect(spread)
  }

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex items-center gap-2 text-yellow-500">
        <Sparkles className="h-6 w-6" />
        <h2 className="text-3xl font-bold text-purple-900 font-cinzel">Choose Your Spread</h2>
        <Sparkles className="h-6 w-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {spreads.map((spread) => (
          <motion.div key={spread.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleSelect(spread)}
              className={`w-full h-full p-6 flex flex-col items-start gap-3 transition-all ${
                selectedSpread?.id === spread.id
                  ? "bg-purple-900 text-yellow-500 border-2 border-yellow-500"
                  : "bg-white text-purple-900 border-2 border-purple-300 hover:border-purple-500"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-bold font-cinzel">{spread.name}</h3>
                <ChevronRight className="h-5 w-5" />
              </div>
              <p className="text-sm opacity-80">{spread.description}</p>
              <div className="flex items-center gap-2 text-xs opacity-60">
                <span>{spread.cardCount} cards</span>
                <span>•</span>
                <span className="capitalize">{spread.layout}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
