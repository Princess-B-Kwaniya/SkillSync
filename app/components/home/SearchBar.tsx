"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar(){
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [skills, setSkills] = useState('')
  const [level, setLevel] = useState('')
  const [remoteOnly, setRemoteOnly] = useState(false)
  const ref = useRef<HTMLFormElement | null>(null)

  function submit(e: React.FormEvent){
    e.preventDefault()
    const params = new URLSearchParams()
    if (keyword) params.set('q', keyword)
    if (location) params.set('location', location)
    if (skills) params.set('skills', skills)
    if (level) params.set('level', level)
    if (remoteOnly) params.set('remote', '1')
    router.push('/jobs?' + params.toString())
  }

  // keep a ref for sizing; the bar will be responsive and use `sticky` in layout
  useEffect(() => {
    function onResize(){
      if (ref.current) ref.current.style.minHeight = ''
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <form
        ref={ref}
        onSubmit={submit}
        className="mt-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl bg-white shadow-sm p-4 transition-all duration-300 sticky top-20 z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
          <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Keyword" className="input w-full rounded-full" />
          <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" className="input w-full rounded-full" />
          <input value={skills} onChange={e => setSkills(e.target.value)} placeholder="Skills (comma separated)" className="input w-full rounded-full col-span-1 lg:col-span-2" />
          <select value={level} onChange={e => setLevel(e.target.value)} className="input w-full rounded-full">
            <option value="">Experience level</option>
            <option value="internship">Internship</option>
            <option value="graduate">Graduate</option>
            <option value="entry">Entry</option>
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={remoteOnly} onChange={e => setRemoteOnly(e.target.checked)} /> Remote only
          </label>
        </div>

        <div className="mt-3 flex justify-end">
          <button className="bg-primary text-white px-5 py-2 rounded-full">🔍 Search</button>
        </div>
      </form>
    </>
  )
}
