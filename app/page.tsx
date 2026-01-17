"use client"

import { useState, useEffect } from "react"
import { DailyCard } from "@/types/tarot"
import { getTodaysDailyCard, isDailyCardExpired } from "@/lib/daily-card"
import { getDailyCard, saveDailyCard } from "@/lib/storage"
import { getUserName } from "@/lib/storage"
import { getZodiacSign } from "@/lib/zodiac"
import { DailyCardDisplay } from "@/components/tarot/daily-card-display"
import { DailyCardShare } from "@/components/tarot/daily-card-share"
import { UserNameInput } from "@/components/tarot/user-name-input"
import { SoundManager } from "@/components/tarot/sound-manager"
import { Button } from "@/components/ui/button"
import { Sparkles, History, Shuffle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [dailyCard, setDailyCard] = useState<DailyCard | null>(null)
  const [userName, setUserName] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDailyCard = () => {
      const cached = getDailyCard()
      const name = getUserName()

      if (cached && !isDailyCardExpired(cached.date)) {
        setDailyCard(cached)
      } else {
        const zodiacSign = getZodiacSign(new Date())
        const newDailyCard = getTodaysDailyCard(zodiacSign)
        saveDailyCard(newDailyCard)
        setDailyCard(newDailyCard)
      }

      setUserName(name)
      setLoading(false)
    }

    loadDailyCard()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 flex items-center justify-center">
        <div className="text-purple-900 text-xl">Loading your daily card...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100">
      <SoundManager />

      <header className="bg-purple-900/90 backdrop-blur-sm border-b-2 border-yellow-500/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-yellow-500">Mystic Tarot</h1>
          </div>

          <div className="flex items-center gap-4">
            <UserNameInput onNameChange={setUserName} />

            <nav className="flex gap-2">
              <Link href="/history">
                <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800">
                  <History className="h-4 w-4 mr-2" />
                  History
                </Button>
              </Link>
              <Link href="/reading">
                <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800">
                  <Shuffle className="h-4 w-4 mr-2" />
                  New Reading
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {dailyCard && (
          <>
            <DailyCardDisplay dailyCard={dailyCard} />
            <div className="flex justify-center mt-6">
              <DailyCardShare dailyCard={dailyCard} userName={userName} />
            </div>
          </>
        )}
      </main>

      <footer className="bg-purple-900/90 backdrop-blur-sm border-t-2 border-yellow-500/50 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-yellow-500/80">
          <p>✨ May the cards guide your path ✨</p>
        </div>
      </footer>
    </div>
  )
}
