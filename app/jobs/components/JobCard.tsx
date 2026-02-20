"use client"

import React from 'react'
import Link from 'next/link'
import type { Job } from '../../../types/job'
import MatchBadge from './MatchBadge'
import { matchSkills } from '../../../lib/matchSkills'
import { useSavedJobs } from '../../components/SavedJobsProvider'
import MatchProgress from './MatchProgress'

export default function JobCard({ job, userSkills = [], showApply = false }: { job: Job, userSkills?: string[], showApply?: boolean }){
  const { percent, missing } = matchSkills(userSkills, job.requiredSkills)
  const youth = job.experienceLevel === 'internship' || job.experienceLevel === 'graduate'

  const { isSaved, saveJob, unsaveJob } = useSavedJobs()

  return (
    <article className="card">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <div className="text-sm text-slate-500">{job.company} • {job.location}</div>
          <div className="mt-2 text-sm text-slate-600">{job.description}</div>
        </div>

        <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 w-full md:w-auto">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <MatchBadge percent={percent} />
            <div className="w-full md:w-36 lg:w-28">
              <MatchProgress percent={percent} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">{job.experienceLevel}</div>
            {youth && <div className="text-xs px-2 py-1 rounded-md bg-indigo-50 text-indigo-600">🎯 First Experience Opportunity</div>}
          </div>

          <div className="mt-2 md:mt-0 flex items-center gap-2">
            <Link href={`/jobs/${job.id}`} className="text-sm text-primary">View</Link>
            {showApply && (
              <>
                <Link href={`/jobs/${job.id}`} className="text-sm btn-primary hidden sm:inline-block">Apply Now</Link>
                {/* small-screen full-width apply button */}
                <Link href={`/jobs/${job.id}`} className="text-sm btn-primary sm:hidden block w-full text-center mt-2">Apply</Link>
                {isSaved(job.id) ? (
                  <button onClick={() => unsaveJob(job.id)} className="text-sm px-2 py-1 border rounded">★</button>
                ) : (
                  <button onClick={() => saveJob(job.id)} className="text-sm px-2 py-1 border rounded">☆</button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
