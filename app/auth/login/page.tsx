"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams?.get('next') ?? undefined

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Minimal client-side "login" for demo: store a user object in localStorage
    try {
      const user = { email, name: email.split('@')[0] || 'User' }
      localStorage.setItem('skillsync:user', JSON.stringify(user))
      // Redirect to the requested page after login, default to main page
      router.push(next || '/')
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <section className="container py-12">
      <div className="max-w-md mx-auto card">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <input placeholder="Email" className="input" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" className="input" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn-primary" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
        </form>

        <div className="mt-4 text-sm">
          Don't have an account? <Link href="/auth/register" className="text-primary">Register</Link>
        </div>
      </div>
    </section>
  )
}
