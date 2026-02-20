"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Protected from '../components/Protected'

type UserProfile = {
  id?: string
  name?: string
  email?: string
  summary?: string
  skills?: string[]
  certifications?: string[]
  interests?: string[]
  location?: string
  avatar?: string
  emailUpdates?: boolean
}

export default function ProfilePage(){
  const [user, setUser] = useState<UserProfile | null>(null)
  const [saving, setSaving] = useState(false)
  const router = useRouter()
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const popularSkills = ['JavaScript','TypeScript','React','Node.js','HTML','CSS','Python','SQL','AWS','Docker','Git']

  // lazy load CVUpload to keep bundle small
  const CVUpload = require('../components/profile/CVUpload').default as any

  useEffect(() => {
    try {
      const raw = localStorage.getItem('skillsync:user')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {
      setUser(null)
    }
  }, [])

  useEffect(() => {
    if (user && (user as any).avatar) setAvatarPreview((user as any).avatar as string)
  }, [user])

  function updateField<K extends keyof UserProfile>(key: K, value: UserProfile[K]){
    setUser(prev => ({ ...(prev || {}), [key]: value }))
  }

  function handleAvatarFile(file?: File){
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const data = String(reader.result)
      setAvatarPreview(data)
      updateField('avatar' as any, data as any)
    }
    reader.readAsDataURL(file)
  }

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
    const data = avatarPreview
    if (!data) return
    try {
      const cropped = await cropToSquare(data)
      setAvatarPreview(cropped)
      updateField('avatar' as any, cropped as any)
    } catch (e) {
      console.error(e)
    }
  }

  function addSkillFromInput(s: string){
    const val = s.trim()
    if (!val) return
    const next = Array.from(new Set([...(user?.skills || []), val]))
    updateField('skills', next)
  }

  function removeSkill(idx: number){
    const next = (user?.skills || []).filter((_, i) => i !== idx)
    updateField('skills', next)
  }

  function addSkillFromSuggestion(s: string){
    const next = Array.from(new Set([...(user?.skills || []), s]))
    updateField('skills', next)
  }

  function saveProfile(){
    if (!user) return
    setSaving(true)
    try {
      localStorage.setItem('skillsync:user', JSON.stringify(user))
      setSaving(false)
      // After creating/updating profile, send user to the main dashboard
      router.push('/dashboard')
    } catch (e) {
      console.error(e)
      setSaving(false)
    }
  }

  if (!user) {
    // Protected wrapper will redirect unauthenticated users; fallback UI while redirecting
    return (
      <Protected redirectTo="/auth/login">
        <section>
          <h1 className="text-2xl font-bold">Create your profile</h1>
          <div className="mt-4 card">
            <p className="text-sm">Redirecting to sign in…</p>
          </div>
        </section>
      </Protected>
    )
  }

  return (
    <section>
      <h1 className="text-2xl font-bold">Profile</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <label className="block text-sm font-medium">Full name</label>
          <input className="input mt-1" value={user.name || ''} onChange={e => updateField('name', e.target.value)} />

          <label className="block text-sm font-medium mt-4">Email</label>
          <input className="input mt-1" value={user.email || ''} onChange={e => updateField('email', e.target.value)} />

          <label className="block text-sm font-medium mt-4">Summary</label>
          <textarea className="input mt-1 h-28" value={user.summary || ''} onChange={e => updateField('summary', e.target.value)} />

          <label className="block text-sm font-medium mt-4">Skills</label>
          <div className="mt-2">
            <div className="flex gap-2">
              <input placeholder="Add a skill and press Enter" className="input flex-1" onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSkillFromInput((e.target as HTMLInputElement).value); (e.target as HTMLInputElement).value = '' } }} />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {(user.skills || []).map((s, i) => (
                <div key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                  <span>{s}</span>
                  <button type="button" className="text-xs text-red-500" onClick={() => removeSkill(i)}>x</button>
                </div>
              ))}
            </div>

            <div className="mt-2 text-sm text-slate-600">Suggestions:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {popularSkills.filter(p => !(user.skills || []).includes(p)).map(p => (
                <button key={p} type="button" className="px-3 py-1 bg-white border rounded text-sm" onClick={() => addSkillFromSuggestion(p)}>{p}</button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Certifications (comma separated)</label>
            <input className="input mt-1" value={(user.certifications || []).join(', ')} onChange={e => updateField('certifications', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} />
          </div>

          <div className="mt-4">
            {/* @ts-ignore */}
            <CVUpload onApply={(data: any) => {
              if (data.name) updateField('name', data.name)
              if (data.email) updateField('email', data.email)
              if (data.skills && data.skills.length) updateField('skills', Array.from(new Set([...(user.skills||[]), ...data.skills])))
            }} />
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={(user as any).emailUpdates === true} onChange={e => updateField('emailUpdates', e.target.checked)} />
              <span className="text-sm">Receive job updates by email</span>
            </label>
            <div className="mt-2 text-xs text-slate-500">We will email curated job updates and recommendations. (Demo: uses client-side storage — implement server subscription to send real emails.)</div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Avatar</label>
            <input type="file" accept="image/*" className="input mt-1" onChange={e => handleAvatarFile(e.target.files?.[0])} />
            {avatarPreview && <img src={avatarPreview} alt="avatar" className="w-24 h-24 rounded-full mt-2 object-cover" />}
          </div>

          <div className="mt-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button className="btn-secondary w-full sm:w-auto" onClick={() => { localStorage.removeItem('skillsync:user'); router.push('/') }}>Delete Profile</button>
              <button className="btn-primary w-full sm:w-auto" onClick={saveProfile} disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</button>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Profile Preview</h3>
          <div className="mt-3">
            <div className="text-lg font-bold">{user.name}</div>
            <div className="text-sm text-darkText/70">{user.email}</div>
            <div className="mt-3 text-sm">{user.summary}</div>
            <div className="mt-3 text-sm"><strong>Skills:</strong> {(user.skills || []).join(', ') || '—'}</div>
            <div className="mt-2 text-sm"><strong>Certifications:</strong> {(user.certifications || []).join(', ') || '—'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
