import type { Job } from '../types/job'

export function matchSkills(userSkills: string[], requiredSkills: string[]) {
  const normalizedUser = userSkills.map(s => s.toLowerCase())
  const normalizedReq = requiredSkills.map(s => s.toLowerCase())

  const matched = normalizedReq.filter(s => normalizedUser.includes(s))
  const missing = requiredSkills.filter((_, i) => !normalizedUser.includes(normalizedReq[i]))
  const percent = requiredSkills.length === 0 ? 100 : Math.round((matched.length / requiredSkills.length) * 100)

  return {
    percent,
    matched: matched.map(s => s),
    missing
  }
}

export default matchSkills
