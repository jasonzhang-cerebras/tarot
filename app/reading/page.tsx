"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Spread } from "@/types/tarot"
import { SPREADS } from "@/lib/spreads"
import { SpreadSelector } from "@/components/tarot/spread-selector"
import { SoundManager } from "@/components/tarot/sound-manager"
import { ParticlesBackground } from "@/components/tarot/particles-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ReadingPage() {
  const router = useRouter()
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null)

  const handleSpreadSelect = (spread: Spread) => {
    setSelectedSpread(spread)
    router.push(`/reading/${spread.id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100">
      <ParticlesBackground />
      <SoundManager />

      <header className="bg-purple-900/90 backdrop-blur-sm border-b-2 border-yellow-500/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-yellow-500 font-cinzel">Mystic Tarot</h1>
          </div>

          <Link href="/">
            <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <SpreadSelector spreads={SPREADS} onSelect={handleSpreadSelect} />
      </main>
    </div>
  )
}
