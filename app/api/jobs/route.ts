import { NextResponse } from 'next/server'
import { getJobs } from '../../../services/jobService'

export async function GET() {
  const jobs = await getJobs()
  return NextResponse.json(jobs)
}
