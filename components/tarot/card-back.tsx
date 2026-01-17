"use client"

import { motion } from "framer-motion"

export function CardBack() {
  return (
    <motion.div
      className="w-full h-full rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border-2 border-yellow-500 shadow-lg flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border-2 border-yellow-500" />
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full border border-yellow-500/50" />
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 rounded-full border border-yellow-500/30 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-3/4 h-3/4 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
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
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-yellow-500 text-xs font-semibold tracking-widest">TAROT</div>
      </div>
    </motion.div>
  )
}
