"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Spread, TarotCard, Reading } from "@/types/tarot"
import { SPREADS } from "@/lib/spreads"
import { tarotCards } from "@/lib/tarot-data"
import { shuffleDeck, drawCards } from "@/lib/shuffle"
import { addToHistory, getHistory } from "@/lib/storage"
import { SoundManager } from "@/components/tarot/sound-manager"
import { ShuffleAnimation } from "@/components/tarot/shuffle-animation"
import { ReadingDisplay } from "@/components/tarot/reading-display"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RotateCcw, Share2, Download } from "lucide-react"
import Link from "next/link"
import { exportReadingToText, downloadTextFile } from "@/lib/export"
import { copyToClipboard } from "@/lib/clipboard"

export default function SpreadReadingPage() {
  const router = useRouter()
  const params = useParams()
  const [spread, setSpread] = useState<Spread | null>(null)
  const [cards, setCards] = useState<Array<{ card: TarotCard; isReversed: boolean }>>([])
  const [isShuffling, setIsShuffling] = useState(false)
  const [showReading, setShowReading] = useState(false)

  useEffect(() => {
    const spreadId = params.id as string
    const foundSpread = SPREADS.find((s: Spread) => s.id === spreadId)

    if (foundSpread) {
      setSpread(foundSpread)
      startReading(foundSpread)
    } else {
      router.push("/reading")
    }
  }, [params.id, router])

  const startReading = (selectedSpread: Spread) => {
    setIsShuffling(true)
    setShowReading(false)

    const shuffled = shuffleDeck([...tarotCards])
    const drawn = drawCards(shuffled, selectedSpread.cardCount)

    const cardsWithReversal = drawn.map((card) => ({
      card,
      isReversed: Math.random() > 0.5,
    }))

    setCards(cardsWithReversal)
  }

  const handleShuffleComplete = () => {
    setIsShuffling(false)
    setShowReading(true)

    if (spread) {
      const reading: Reading = {
        id: Date.now().toString(),
        date: new Date(),
        spread: spread.name,
        cards: cards.map((c) => ({
          cardId: c.card.id,
          position: spread.positions[cards.indexOf(c)]?.name || "",
          isReversed: c.isReversed,
        })),
        meaningSource: "builtin",
      }

      const history = getHistory()
      if (history.length < 22) {
        addToHistory(reading)
      }
    }
  }

  const handleReshuffle = () => {
    if (spread) {
      startReading(spread)
    }
  }

  const handleShare = async () => {
    if (spread) {
      const reading: Reading = {
        id: Date.now().toString(),
        date: new Date(),
        spread: spread.name,
        cards: cards.map((c) => ({
          cardId: c.card.id,
          position: spread.positions[cards.indexOf(c)]?.name || "",
          isReversed: c.isReversed,
        })),
        meaningSource: "builtin",
      }

      const text = exportReadingToText(reading)
      await copyToClipboard(text)
    }
  }

  const handleExport = () => {
    if (spread) {
      const reading: Reading = {
        id: Date.now().toString(),
        date: new Date(),
        spread: spread.name,
        cards: cards.map((c) => ({
          cardId: c.card.id,
          position: spread.positions[cards.indexOf(c)]?.name || "",
          isReversed: c.isReversed,
        })),
        meaningSource: "builtin",
      }

      const text = exportReadingToText(reading)
      downloadTextFile(text, `tarot-reading-${Date.now()}.txt`)
    }
  }

  if (!spread) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 flex items-center justify-center">
        <div className="text-purple-900 text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100">
      <SoundManager />

      <header className="bg-purple-900/90 backdrop-blur-sm border-b-2 border-yellow-500/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-yellow-500">{spread.name}</h1>
          </div>

          <div className="flex gap-2">
            {showReading && (
              <>
                <Button
                  onClick={handleReshuffle}
                  variant="ghost"
                  className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reshuffle
                </Button>
                <Button
                  onClick={handleShare}
                  variant="ghost"
                  className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  onClick={handleExport}
                  variant="ghost"
                  className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </>
            )}

            <Link href="/reading">
              <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isShuffling && <ShuffleAnimation cards={tarotCards.slice(0, 12)} onComplete={handleShuffleComplete} />}

        {showReading && spread && <ReadingDisplay spread={spread} cards={cards} />}
      </main>
    </div>
  )
}
