import { getJobById } from '../../../services/jobService'
import { getCurrentUser } from '../../../services/userService'
import { matchSkills } from '../../../lib/matchSkills'
import { readinessScore } from '../../../lib/readinessScore'
import Link from 'next/link'
import QuickApply from '../components/QuickApply'

interface Props { params: { id: string } }

export default async function JobDetails({ params }: Props){
  const job = await getJobById(params.id)
  if (!job) return <div>Job not found</div>

  const user = await getCurrentUser()
  const match = matchSkills(user.skills, job.requiredSkills)
  const readiness = readinessScore({ skillMatchPercent: match.percent, userCertifications: user.certifications, job })

  const recommendedResources = match.missing.map(s => ({ skill: s, resource: `Free course for ${s} on Coursera / YouTube` }))

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
          <div className="text-sm text-slate-500">{job.company} • {job.location}</div>
        </div>
        <div className="text-left md:text-right">
          <div className="text-sm text-slate-700">Match: <strong>{match.percent}%</strong></div>
          <div className="text-sm text-slate-700">Readiness: <strong>{readiness.score}/100</strong></div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card">
          <h3 className="font-semibold">About the role</h3>
          <p className="mt-2 text-slate-600">{job.description}</p>
          <h4 className="mt-4 font-medium">Required Skills</h4>
          <ul className="mt-2 list-disc list-inside text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {job.requiredSkills.map(s => <li key={s}>{s}</li>)}
          </ul>
          <h4 className="mt-4 font-medium">Missing Skills</h4>
          {match.missing.length === 0 ? <div className="text-sm text-green-600">You have all required skills</div> : (
            <ul className="mt-2 list-disc list-inside text-slate-600">
              {match.missing.map(s => <li key={s}>{s}</li>)}
            </ul>
          )}
        </div>

        <aside className="card">
          <h4 className="font-semibold">Readiness Feedback</h4>
          <div className="mt-2 text-slate-600">You are <strong>{readiness.score}%</strong> ready for this role.</div>
          {readiness.improvementAreas.length > 0 && (
            <ul className="mt-3 list-disc list-inside text-slate-600">
              {readiness.improvementAreas.map(a => <li key={a}>{a}</li>)}
            </ul>
          )}

          {job.certifications && job.certifications.length > 0 && (
            <>
              <h5 className="mt-4 font-medium">Recommended Certifications</h5>
              <ul className="mt-2 list-disc list-inside text-slate-600">
                {job.certifications.map(c => <li key={c}>{c}</li>)}
              </ul>
            </>
          )}

          <h5 className="mt-4 font-medium">Suggested Resources</h5>
          <ul className="mt-2 list-disc list-inside text-slate-600">
            {recommendedResources.map(r => <li key={r.skill}><a className="text-primary" href="#">{r.resource}</a></li>)}
          </ul>

          <div className="mt-4">
            <h5 className="font-medium">Quick Apply</h5>
            {/* QuickApply is a client component that connects to SavedJobsProvider */}
            {/* @ts-ignore server-to-client prop passing */}
            <QuickApply jobId={job.id} defaultName={user.name} defaultEmail={user.email} />
          </div>
        </aside>
      </div>

      <div className="mt-6">
        <Link href="/jobs" className="text-sm text-slate-600">← Back to jobs</Link>
      </div>
    </section>
  )
}
