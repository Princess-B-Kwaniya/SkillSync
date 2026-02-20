import { getJobs } from '../../services/jobService'
import { getCurrentUser } from '../../services/userService'
import JobCard from './components/JobCard'
import SearchBar from '../components/home/SearchBar'

type Params = { searchParams?: { [key: string]: string | string[] | undefined } }

function matchesFilter(job: any, params: Record<string, string | string[] | undefined>){
  const q = (params.q || '').toString().toLowerCase()
  const location = (params.location || '').toString().toLowerCase()
  const skills = (params.skills || '').toString().toLowerCase()
  const level = (params.level || '').toString().toLowerCase()
  const remote = params.remote === '1' || params.remote === 'true'
  const category = (params.category || '').toString().toLowerCase()

  if (q) {
    const inTitle = job.title.toLowerCase().includes(q)
    const inCompany = job.company.toLowerCase().includes(q)
    if (!inTitle && !inCompany) return false
  }

  if (location) {
    if (!job.location.toLowerCase().includes(location)) return false
  }

  if (skills) {
    const wanted = skills.split(',').map(s => s.trim()).filter(Boolean)
    const hasAny = wanted.every(ws => job.requiredSkills.map((rs:any)=>rs.toLowerCase()).includes(ws.toLowerCase()))
    if (!hasAny) return false
  }

  if (level) {
    if (job.experienceLevel !== level) return false
  }

  if (remote) {
    if (!job.location.toLowerCase().includes('remote')) return false
  }

  if (category) {
    if (!job.title.toLowerCase().includes(category) && !job.description.toLowerCase().includes(category)) return false
  }

  return true
}

export default async function JobsPage({ searchParams }: Params){
  const [jobs, user] = await Promise.all([getJobs(), getCurrentUser()])

  const params = searchParams || {}
  const filtered = jobs.filter(j => matchesFilter(j, params))

  return (
    <section>
      <div className="px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mt-6">
          <h1 className="text-2xl md:text-3xl font-bold">Jobs & Opportunities</h1>
          <div className="text-sm text-slate-600">Showing curated entry-level and youth-priority roles</div>
        </div>
        <SearchBar />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full card">
            <h3 className="font-semibold">No results</h3>
            <p className="mt-2 text-slate-600">Don't worry. Improve these skills and try again. See our Learning Hub for resources.</p>
            <div className="mt-4">
              <a href="/resources" className="text-primary">Open Learning Hub</a>
            </div>
          </div>
        ) : (
          filtered.map(j => (
            //<JobCard is client component; pass user skills for match calculation>
            // @ts-ignore
            <JobCard key={j.id} job={j} userSkills={user.skills} showApply />
          ))
        )}
      </div>
    </section>
  )
}
