"use client"

import React, { useState } from 'react'
import { useSavedJobs } from '../../components/SavedJobsProvider'

export default function QuickApply({ jobId, defaultName = '', defaultEmail = '' }: { jobId: string, defaultName?: string, defaultEmail?: string }){
  const { applyToJob } = useSavedJobs()
  const [name, setName] = useState(defaultName)
  const [email, setEmail] = useState(defaultEmail)
  const [message, setMessage] = useState('')
  const [done, setDone] = useState(false)

  function submit(e: React.FormEvent){
    e.preventDefault()
    applyToJob({ jobId, name, email, message })
    setDone(true)
  }

  if (done) return <div className="p-3 rounded bg-green-50 text-green-700">Application submitted — good luck!</div>

  return (
    <form onSubmit={submit} className="mt-2 flex flex-col gap-2">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="input" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="input" />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Why are you a good fit?" className="input" />
      <button className="btn-primary">Apply Now</button>
    </form>
  )
}
