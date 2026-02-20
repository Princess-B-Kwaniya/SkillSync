"use client"

import { useSavedJobs } from '../components/SavedJobsProvider'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Protected from '../components/Protected'

type JobSummary = { id: string; title: string }

export default function DashboardPage(){
  const { savedJobIds, applications } = useSavedJobs()
  const [jobs, setJobs] = useState<JobSummary[]>([])

  useEffect(() => {
    let mounted = true
    async function load(){
      try{
        const res = await fetch('/api/jobs')
        if (!res.ok) return
        const data = await res.json()
        // API returns either array or { jobs }
        const list = Array.isArray(data) ? data : data.jobs || []
        if (!mounted) return
        setJobs(list.map((j: any) => ({ id: j.id, title: j.title })))
      }catch(e){
        // ignore for now
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const titleFor = (id: string) => jobs.find(j => j.id === id)?.title || id

  return (
    <Protected redirectTo="/auth/login">
      <section>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-4 text-slate-600">Overview of applications, saved roles, and readiness highlights.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">Applications: <strong>{applications.length}</strong></div>
          <div className="card">Saved Roles: <strong>{savedJobIds.length}</strong></div>
          <div className="card">Readiness Avg: <strong>72%</strong></div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Saved Jobs</h3>
            {savedJobIds.length === 0 ? (
              <div className="mt-3 text-slate-600">You haven't saved any jobs yet.</div>
            ) : (
              <ul className="mt-3 list-disc list-inside">
                {savedJobIds.map((id: string) => (
                  <li key={id}><Link href={`/jobs/${id}`} className="text-primary">{titleFor(id)}</Link></li>
                ))}
              </ul>
            )}
          </div>

          <div className="card">
            <h3 className="font-semibold">Applications</h3>
            {applications.length === 0 ? (
              <div className="mt-3 text-slate-600">No applications yet. Use Quick Apply on job pages.</div>
            ) : (
              <ul className="mt-3 list-disc list-inside">
                {applications.map((a: any) => (
                  <li key={a.id}>{a.name} · <Link href={`/jobs/${a.jobId}`} className="text-primary">{titleFor(a.jobId)}</Link> · {new Date(a.appliedAt).toLocaleString()}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </Protected>
  )
}
