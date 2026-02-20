import JobCard from '../../jobs/components/JobCard'
import { getJobs, getJobById } from '../../../services/jobService'
import { getCurrentUser } from '../../../services/userService'
import { FEATURED_JOB_IDS } from '../../../services/featuredService'

export default async function FeaturedJobs(){
  const [jobs, user] = await Promise.all([getJobs(), getCurrentUser()])

  // preserve curated order
  const featured = FEATURED_JOB_IDS.map(id => jobs.find(j => j.id === id)).filter(Boolean) as typeof jobs

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Featured Opportunities</h2>
        <p className="text-sm text-darkText/70 mt-2">Curated roles matched to youth and entry-level talent.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map(j => (
            // JobCard is a client component
            // @ts-ignore server->client
            <JobCard key={j.id} job={j} userSkills={user.skills} showApply />
          ))}
        </div>
      </div>
    </section>
  )
}
