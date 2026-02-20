"use client"

import Link from 'next/link'
import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../../context/AuthContext'

export default function RegisterPage(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [skillInput, setSkillInput] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const popularSkills = ['JavaScript','TypeScript','React','Node.js','HTML','CSS','Python','SQL','AWS','Docker','Git']
  const [interests, setInterests] = useState('')
  const [avatar, setAvatar] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { login } = useContext(AuthContext)

  function addSkillFromInput(){
    const s = skillInput.trim()
    if (!s) return
    if (!skills.includes(s)) setSkills(prev => [...prev, s])
    setSkillInput('')
  }

  function removeSkill(idx: number){
    setSkills(prev => prev.filter((_, i) => i !== idx))
  }

  function addSkillFromSuggestion(s: string){
    if (!skills.includes(s)) setSkills(prev => [...prev, s])
  }

  function handleAvatar(file?: File){
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setAvatar(String(reader.result))
    reader.readAsDataURL(file)
  }

  // Crop image to centered square using canvas
  async function cropToSquare(dataUrl: string){
    return new Promise<string>((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const size = Math.min(img.width, img.height)
        const sx = (img.width - size) / 2
        const sy = (img.height - size) / 2
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        if (!ctx) return reject(new Error('No canvas'))
        ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size)
        resolve(canvas.toDataURL('image/png'))
      }
      img.onerror = reject
      img.src = dataUrl
    })
  }

  async function cropAvatar(){
    if (!avatar) return
    try {
      const cropped = await cropToSquare(avatar)
      setAvatar(cropped)
    } catch (e) {
      console.error(e)
    }
  }

  function validate(){
    setError(null)
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email.'
    if (!password || password.length < 6) return 'Password must be at least 6 characters.'
    return null
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate()
    if (v) { setError(v); return }
    setLoading(true)

    // Minimal client-side registration: persist to localStorage
    try {
      const user = {
        id: `user-${Date.now()}`,
        name: name || email.split('@')[0] || 'User',
        email,
        skills,
        interests: interests ? interests.split(',').map(s => s.trim()).filter(Boolean) : [],
        avatar,
        createdAt: new Date().toISOString()
      }
      // persist and login via AuthContext so Navbar updates immediately
      localStorage.setItem('skillsync:user', JSON.stringify(user))
      try {
        if (login) login(user)
      } catch (e) {
        // fallback handled by localStorage
      }
      router.push('/profile')
    } catch (err) {
      console.error(err)
      setLoading(false)
      setError('Failed to create account')
    }
  }

  return (
    <section className="container py-12">
      <div className="max-w-lg mx-auto card">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-darkText/70 mt-2">Create a free SkillSync profile to get personalized matches and a career roadmap.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3">
          {error && <div className="text-sm text-red-600">{error}</div>}
          <input placeholder="Full name" className="input" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Email" className="input" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" className="input" value={password} onChange={e => setPassword(e.target.value)} />

          <label className="text-sm font-medium">Avatar (optional)</label>
          <input type="file" accept="image/*" className="input" onChange={e => handleAvatar(e.target.files?.[0])} />
          {avatar && <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full mt-2 object-cover" />}
          {avatar && <div className="mt-2"><button type="button" className="btn-secondary" onClick={cropAvatar}>Crop avatar to square</button></div>}

          <label className="text-sm font-medium">Skills</label>
          <div className="flex gap-2">
            <input placeholder="Add a skill and press Enter" className="input flex-1" value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSkillFromInput() } }} />
            <button type="button" className="btn-secondary" onClick={addSkillFromInput}>Add</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((s, i) => (
              <div key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                <span>{s}</span>
                <button type="button" className="text-xs text-red-500" onClick={() => removeSkill(i)}>x</button>
              </div>
            ))}
          </div>

          <div className="mt-2 text-sm text-slate-600">Suggestions:</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {popularSkills.filter(p => !skills.includes(p) && p.toLowerCase().includes(skillInput.toLowerCase())).map(p => (
              <button key={p} type="button" className="px-3 py-1 bg-white border rounded text-sm" onClick={() => addSkillFromSuggestion(p)}>{p}</button>
            ))}
          </div>

          <input placeholder="Career interests (comma separated)" className="input" value={interests} onChange={e => setInterests(e.target.value)} />

          <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-darkText/60">By creating an account you agree to our terms.</div>
            <button className="btn-primary" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
          </div>
        </form>

        <div className="mt-4 text-sm">
          Already have an account? <Link href="/auth/login" className="text-primary">Sign in</Link>
        </div>
      </div>
    </section>
  )
}
