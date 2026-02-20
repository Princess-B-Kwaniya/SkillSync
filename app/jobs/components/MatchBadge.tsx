"use client"

import React from 'react'

export default function MatchBadge({ percent }: { percent: number }){
  const color = percent >= 80 ? 'bg-green-500' : percent >= 50 ? 'bg-yellow-400' : 'bg-red-400'
  return (
    <div className={`inline-flex items-center px-2 py-1 text-xs rounded-full text-white ${color}`}> {percent}% match </div>
  )
}
