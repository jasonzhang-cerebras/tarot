"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setSoundEnabled, isSoundEnabled } from "@/lib/sound"
import { initializeSounds } from "@/lib/sound-config"

export function SoundManager() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    setEnabled(isSoundEnabled())
    initializeSounds()
  }, [])

  const toggleSound = () => {
    const newState = !enabled
    setEnabled(newState)
    setSoundEnabled(newState)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSound}
      className="fixed top-4 right-4 z-50 bg-purple-900/80 hover:bg-purple-800/80 text-yellow-500 border border-yellow-500/50"
    >
      {enabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </Button>
  )
}
