"use client"

import { useState, useEffect } from "react"
import { Reading } from "@/types/tarot"
import { getHistory, clearHistory } from "@/lib/storage"
import { ReadingHistory } from "@/components/tarot/reading-history"
import { SoundManager } from "@/components/tarot/sound-manager"
import { ParticlesBackground } from "@/components/tarot/particles-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Trash2 } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  useEffect(() => {
    loadHistory()
  }, [])

  const loadHistory = () => {
    const history = getHistory()
    setReadings(history)
  }

  const handleDelete = (id: string) => {
    const updated = readings.filter((r) => r.id !== id)
    setReadings(updated)
    localStorage.setItem("tarot_history", JSON.stringify(updated))
  }

  const handleClearAll = () => {
    clearHistory()
    setReadings([])
    setShowDeleteConfirm(false)
  }

  const handleSelect = (reading: Reading) => {
    console.log("Selected reading:", reading)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100">
      <ParticlesBackground />
      <SoundManager />

      <header className="bg-purple-900/90 backdrop-blur-sm border-b-2 border-yellow-500/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-yellow-500 font-cinzel">Reading History</h1>
          </div>

          <div className="flex gap-2">
            {readings.length > 0 && (
              <Button
                onClick={() => setShowDeleteConfirm(true)}
                variant="ghost"
                className="text-red-400 hover:text-red-300 hover:bg-purple-800"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}

            <Link href="/">
              <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-purple-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showDeleteConfirm && (
          <div className="mb-6 bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <p className="text-red-900 mb-4">Are you sure you want to delete all readings? This cannot be undone.</p>
            <div className="flex gap-2">
              <Button onClick={handleClearAll} className="bg-red-600 hover:bg-red-700 text-white">
                Yes, Delete All
              </Button>
              <Button
                onClick={() => setShowDeleteConfirm(false)}
                variant="outline"
                className="border-red-400 text-red-900 hover:bg-red-100"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        <ReadingHistory readings={readings} onDelete={handleDelete} onSelect={handleSelect} />
      </main>
    </div>
  )
}
