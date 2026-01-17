"use client"

import { motion } from "framer-motion"
import { Reading } from "@/types/tarot"
import { Button } from "@/components/ui/button"
import { Trash2, Download, Share2 } from "lucide-react"
import { exportHistoryToText, downloadTextFile } from "@/lib/export"
import { copyToClipboard } from "@/lib/clipboard"

interface ReadingHistoryProps {
  readings: Reading[]
  onDelete: (id: string) => void
  onSelect: (reading: Reading) => void
}

export function ReadingHistory({ readings, onDelete, onSelect }: ReadingHistoryProps) {
  const handleExport = () => {
    const text = exportHistoryToText(readings)
    downloadTextFile(text, "tarot-history.txt")
  }

  const handleShare = async () => {
    const text = exportHistoryToText(readings)
    await copyToClipboard(text)
  }

  if (readings.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <p className="text-purple-700 text-lg">No readings yet</p>
        <p className="text-purple-600">Complete a reading to see it here</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-purple-900">Reading History</h2>
        <div className="flex gap-2">
          <Button
            onClick={handleShare}
            variant="outline"
            className="border-purple-400 text-purple-900 hover:bg-purple-100"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button
            onClick={handleExport}
            variant="outline"
            className="border-purple-400 text-purple-900 hover:bg-purple-100"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {readings.map((reading, index) => (
          <motion.div
            key={reading.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white rounded-lg border-2 border-purple-300 p-4 hover:border-purple-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1 cursor-pointer" onClick={() => onSelect(reading)}>
                  <div className="flex items-center gap-4">
                    <div className="text-purple-900 font-semibold">{new Date(reading.date).toLocaleDateString()}</div>
                    <div className="text-purple-700">{reading.spread}</div>
                    <div className="text-purple-600 text-sm">{reading.cards.length} cards</div>
                  </div>
                </div>
                <Button
                  onClick={() => onDelete(reading.id)}
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
