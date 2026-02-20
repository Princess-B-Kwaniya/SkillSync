"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

type Application = {
  id: string
  jobId: string
  name: string
  email?: string
  message?: string
  appliedAt: string
}

type SavedJobsContextValue = {
  savedJobIds: string[]
  applications: Application[]
  saveJob: (jobId: string) => void
  unsaveJob: (jobId: string) => void
  isSaved: (jobId: string) => boolean
  applyToJob: (app: Omit<Application, 'id'|'appliedAt'>) => void
}

const SavedJobsContext = createContext<SavedJobsContextValue | undefined>(undefined)

const SAVED_KEY = 'skillsync:savedJobs'
const APPS_KEY = 'skillsync:applications'

export function SavedJobsProvider({ children }: { children: React.ReactNode }){
  const [savedJobIds, setSavedJobIds] = useState<string[]>([])
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVED_KEY)
      if (raw) setSavedJobIds(JSON.parse(raw))
    } catch (e) {}
    try {
      const raw = localStorage.getItem(APPS_KEY)
      if (raw) setApplications(JSON.parse(raw))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem(SAVED_KEY, JSON.stringify(savedJobIds)) } catch (e) {}
  }, [savedJobIds])

  useEffect(() => {
    try { localStorage.setItem(APPS_KEY, JSON.stringify(applications)) } catch (e) {}
  }, [applications])

  function saveJob(jobId: string){
    setSavedJobIds(prev => prev.includes(jobId) ? prev : [...prev, jobId])
  }

  function unsaveJob(jobId: string){
    setSavedJobIds(prev => prev.filter(id => id !== jobId))
  }

  function isSaved(jobId: string){
    return savedJobIds.includes(jobId)
  }

  function applyToJob(app: Omit<Application,'id'|'appliedAt'>){
    const newApp: Application = { ...app, id: `app-${Date.now()}`, appliedAt: new Date().toISOString() }
    setApplications(prev => [newApp, ...prev])
  }

  return (
    <SavedJobsContext.Provider value={{ savedJobIds, applications, saveJob, unsaveJob, isSaved, applyToJob }}>
      {children}
    </SavedJobsContext.Provider>
  )
}

export function useSavedJobs(){
  const ctx = useContext(SavedJobsContext)
  if (!ctx) throw new Error('useSavedJobs must be used within SavedJobsProvider')
  return ctx
}

export default SavedJobsProvider
