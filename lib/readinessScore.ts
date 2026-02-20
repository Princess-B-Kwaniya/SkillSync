import type { Job } from '../types/job'

/**
 * Compute a readiness score out of 100.
 * - base score comes from skill match percentage
 * - penalize missing required certifications (10 pts each)
 * - minimum 0, maximum 100
 */
export function readinessScore({
  skillMatchPercent,
  userCertifications = [],
  job
}: {
  skillMatchPercent: number
  userCertifications?: string[]
  job: Job
}) {
  let score = skillMatchPercent

  if (job.certifications && job.certifications.length > 0) {
    const missingCerts = job.certifications.filter(c => !userCertifications.map(x => x.toLowerCase()).includes(c.toLowerCase()))
    score -= missingCerts.length * 12 // heavier penalty for missing certs
  }

  // Penalize if no overlap at all
  if (skillMatchPercent === 0) score = Math.max(score - 10, 0)

  score = Math.max(0, Math.min(100, Math.round(score)))

  const improvementAreas: string[] = []
  if (score < 80) {
    if (skillMatchPercent < 80) improvementAreas.push('Strengthen core skills listed in job requirements')
    if (job.certifications && job.certifications.length > 0) improvementAreas.push('Obtain recommended certifications: ' + job.certifications.join(', '))
  }

  return { score, improvementAreas }
}

export default readinessScore
