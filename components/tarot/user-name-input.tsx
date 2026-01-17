"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getUserName, saveUserName } from "@/lib/storage"

interface UserNameInputProps {
  onNameChange?: (name: string) => void
}

export function UserNameInput({ onNameChange }: UserNameInputProps) {
  const [name, setName] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const savedName = getUserName()
    if (savedName) {
      setName(savedName)
    }
  }, [])

  const handleSave = () => {
    if (name.trim()) {
      saveUserName(name.trim())
      setIsEditing(false)
      onNameChange?.(name.trim())
    }
  }

  if (!isEditing) {
    return (
      <div className="flex items-center gap-2">
        {name ? (
          <>
            <span className="text-purple-900">Welcome, {name}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-purple-700 hover:text-purple-900"
            >
              Edit
            </Button>
          </>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
            className="border-purple-400 text-purple-900 hover:bg-purple-100"
          >
            Enter Your Name
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        className="max-w-xs border-purple-400 focus:border-purple-600"
      />
      <Button onClick={handleSave} className="bg-purple-900 hover:bg-purple-800 text-yellow-500">
        Save
      </Button>
    </div>
  )
}
