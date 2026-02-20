"use client"

import { motion } from 'framer-motion'

export default function MatchProgress({ percent }: { percent: number }){
  const safe = Math.max(0, Math.min(100, percent))
  const pulse = safe >= 80
  const glow = safe >= 95

  return (
    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0, boxShadow: '0 0 0px rgba(249,115,22,0)' }}
        animate={{
          width: `${safe}%`,
          scale: pulse ? [1, 1.03, 1] : 1,
          boxShadow: glow
            ? [
                '0 0 0px rgba(249,115,22,0)',
                '0 0 14px rgba(249,115,22,0.28)',
                '0 0 6px rgba(249,115,22,0.18)'
              ]
            : '0 0 0px rgba(249,115,22,0)'
        }}
        transition={{ duration: 0.9, repeat: pulse || glow ? Infinity : 0, repeatDelay: pulse || glow ? 1.2 : 0 }}
        className="h-3 rounded-full bg-primary"
        style={{ transformOrigin: 'left center' }}
      />
    </div>
  )
}
