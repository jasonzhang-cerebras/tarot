"use client"

import { motion } from "framer-motion"

export function CardBack() {
  return (
    <motion.div
      className="w-full h-full rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border-2 border-yellow-500 shadow-lg flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 140"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#ffec8b" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
        </defs>

        <g stroke="url(#goldGradient)" strokeWidth="0.5" fill="none">
          <path d="M 10 10 Q 50 5 90 10 Q 95 70 90 130 Q 50 135 10 130 Q 5 70 10 10" />
          <path d="M 20 20 Q 50 15 80 20 Q 85 70 80 120 Q 50 125 20 120 Q 15 70 20 20" />
          <path d="M 30 30 Q 50 25 70 30 Q 75 70 70 110 Q 50 115 30 110 Q 25 70 30 30" />
        </g>

        <g stroke="url(#goldGradient)" strokeWidth="0.3" fill="none" opacity="0.6">
          <path d="M 50 10 L 50 30" />
          <path d="M 50 110 L 50 130" />
          <path d="M 10 70 L 30 70" />
          <path d="M 70 70 L 90 70" />
        </g>

        <g stroke="url(#goldGradient)" strokeWidth="0.4" fill="none">
          <path d="M 35 45 Q 50 40 65 45 Q 70 70 65 95 Q 50 100 35 95 Q 30 70 35 45" />
          <path d="M 40 50 Q 50 45 60 50 Q 65 70 60 90 Q 50 95 40 90 Q 35 70 40 50" />
        </g>

        <circle cx="50" cy="70" r="8" stroke="url(#goldGradient)" strokeWidth="0.5" fill="none" />
        <circle cx="50" cy="70" r="4" stroke="url(#goldGradient)" strokeWidth="0.3" fill="none" />
      </svg>

      <motion.div
        className="relative z-10 w-3/4 h-3/4 rounded-full border-2 border-yellow-500/50 flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-1/2 h-1/2 rounded-full bg-yellow-500/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-yellow-500 text-xs font-semibold tracking-widest">TAROT</div>
      </div>
    </motion.div>
  )
}
