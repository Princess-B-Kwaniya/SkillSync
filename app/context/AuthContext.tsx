"use client"

import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type User = any

export const AuthContext = createContext<{
  user: User | null
  login: (u: User) => void
  logout: () => void
}>({ user: null, login: () => {}, logout: () => {} })

export default function AuthProvider({ children }: { children: React.ReactNode }){
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('skillsync:user')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {
      setUser(null)
    }
  }, [])

  function login(u: User){
    try {
      localStorage.setItem('skillsync:user', JSON.stringify(u))
      setUser(u)
      // notify other listeners if needed
      window.dispatchEvent(new Event('skillsync:auth'))
    } catch (e){
      console.error(e)
    }
  }

  function logout(){
    try {
      localStorage.removeItem('skillsync:user')
      setUser(null)
      window.dispatchEvent(new Event('skillsync:auth'))
      // navigate back to home after logout
      try {
        router.push('/')
      } catch (e) {
        // ignore navigation errors
      }
    } catch (e){
      console.error(e)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
