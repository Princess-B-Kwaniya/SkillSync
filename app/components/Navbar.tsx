"use client"

import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/AuthContext'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const [isAuth, setIsAuth] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // reflect context user in local state for UI convenience
    setIsAuth(Boolean(user))
    // also listen for cross-window changes (rare) and custom auth events
    function onStorage(e: StorageEvent | Event) {
      try {
        const raw = localStorage.getItem('skillsync:user')
        setIsAuth(Boolean(raw))
      } catch (e) {
        setIsAuth(false)
      }
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('skillsync:auth', onStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('skillsync:auth', onStorage)
    }
  }, [])

  return (
    <header className="glass-nav sticky top-0 sm:top-4 z-40 w-full mx-auto container px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-full">
      <div className="flex items-center justify-between py-3 px-2 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold">SK</div>
          <div className="text-sm md:text-base">
            <div className="font-bold">SKILLSYNC</div>
            <div className="text-xs text-darkText/70">Employment Intelligence</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          {!isAuth && pathname !== '/' && (
            <Link href="/" className="text-sm text-darkText hover:text-primary transition">Home</Link>
          )}
          {isAuth ? (
            <>
              <Link href="/jobs" className="text-sm text-white bg-primary px-3 py-1 rounded-md">Jobs</Link>
              <Link href="/resources" className="text-sm text-darkText hover:text-primary transition">Career Tips</Link>
              <Link href="/dashboard" className="text-sm text-darkText hover:text-primary transition">Dashboard</Link>
              <Link href="/profile" className="text-sm text-darkText hover:text-primary transition">Profile</Link>
              <button onClick={() => { logout() }} className="hidden lg:inline-block text-sm text-darkText px-3 py-1 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <Link href="/auth/register" className="hidden lg:inline-block text-sm text-white bg-primary px-3 py-1 rounded-md">Register</Link>
              <Link href="/auth/login" className="hidden lg:inline-block text-sm text-primary border border-primary px-3 py-1 rounded-md">Login</Link>
            </>
          )}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="p-2 rounded-md bg-white/60">{open ? '✕' : '☰'}</button>
        </div>
      </div>

      <motion.div initial={{ height: 0 }} animate={{ height: open ? 'auto' : 0 }} className="md:hidden overflow-hidden">
        <div className="p-4 space-y-3">
          {!isAuth && pathname !== '/' && (
            <Link href="/" className="flex items-center gap-3"><span>🏠</span> Home</Link>
          )}
          {isAuth ? (
            <>
              <Link href="/jobs" className="flex items-center gap-3 font-semibold text-primary"><span>💼</span> Jobs</Link>
              <Link href="/resources" className="flex items-center gap-3"><span>📚</span> Career Tips</Link>
              <Link href="/dashboard" className="flex items-center gap-3"><span>📊</span> Dashboard</Link>
              <Link href="/profile" className="flex items-center gap-3"><span>👤</span> Profile</Link>
              <div className="pt-2 border-t">
                <button onClick={() => { logout() }} className="inline-block text-darkText px-3 py-1 rounded-md">Logout</button>
              </div>
            </>
          ) : (
            <div className="pt-2 border-t">
              <Link href="/auth/register" className="inline-block mr-2 bg-primary text-white px-3 py-1 rounded-md">Register</Link>
              <Link href="/auth/login" className="inline-block text-primary px-3 py-1 rounded-md">Login</Link>
            </div>
          )}
        </div>
      </motion.div>
    </header>
  )
}
