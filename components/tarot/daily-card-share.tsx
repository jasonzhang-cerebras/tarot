"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { copyToClipboard } from "@/lib/clipboard"
import { exportDailyCardToText } from "@/lib/export"
import { DailyCard } from "@/types/tarot"

interface DailyCardShareProps {
  dailyCard: DailyCard
  userName?: string
}

export function DailyCardShare({ dailyCard, userName }: DailyCardShareProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const text = exportDailyCardToText(dailyCard.card, userName, dailyCard.zodiacSign)
    const success = await copyToClipboard(text)

    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button
      onClick={handleShare}
      className="bg-purple-900 hover:bg-purple-800 text-yellow-500 border border-yellow-500/50"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-2" />
          Share Reading
        </>
      )}
    </Button>
  )
}
