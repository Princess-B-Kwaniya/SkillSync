"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ children }: { children: React.ReactNode }){
  return (
    <motion.div whileHover={{ y: -6 }} className="card">
      {children}
    </motion.div>
  )
}
