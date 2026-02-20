"use client"

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../context/AuthContext'

export default function Protected({ children, redirectTo = '/auth/login' }: { children: ReactNode, redirectTo?: string }){
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    // client-side demo-only protection: if no user, redirect to login
    if (user) {
      setChecked(true)
      return
    }
    // no user -> redirect to login with next param
    try {
      const next = typeof window !== 'undefined' ? window.location.pathname : undefined
      const target = `${redirectTo}${next ? `?next=${encodeURIComponent(next)}` : ''}`
      router.replace(target)
    } catch (e) {
      // ignore
    }
  }, [user, redirectTo, router])

  if (!user) {
    // while redirecting, render nothing (could render spinner)
    return null
  }

  return <>{children}</>
}
