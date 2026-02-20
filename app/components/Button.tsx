"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'| 'ghost'
  size?: 'sm'|'md'
}

export default function Button({ variant='primary', size='md', children, className='', ...props }: Props){
  const base = 'inline-flex items-center gap-2 rounded-full font-semibold transition-transform'
  const sizes: Record<string,string> = { sm: 'px-3 py-1 text-sm', md: 'px-5 py-2 text-base' }
  const variants: Record<string,string> = {
    primary: 'bg-primary text-white shadow-md',
    ghost: 'bg-white border border-slate-200 text-slate-700'
  }

  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...(props as any)}>
      {children}
    </motion.button>
  )
}
