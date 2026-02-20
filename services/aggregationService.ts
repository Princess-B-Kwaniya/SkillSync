import type { Job } from '../types/job'
import { getJobs } from './jobService'

export async function aggregateJobsByLocation() {
  const jobs = await getJobs()
  const map: Record<string, Job[]> = {}
  jobs.forEach(j => {
    map[j.location] = map[j.location] || []
    map[j.location].push(j)
  })
  return map
}

export async function searchJobs(query: string) {
  const jobs = await getJobs()
  const q = query.toLowerCase()
  return jobs.filter(j => j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.location.toLowerCase().includes(q))
}

export default { aggregateJobsByLocation, searchJobs }
