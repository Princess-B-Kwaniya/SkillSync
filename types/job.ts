export type ExperienceLevel = 'internship' | 'graduate' | 'entry'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  requiredSkills: string[]
  experienceLevel: ExperienceLevel
  certifications?: string[]
  description: string
  applicationDeadline: string // ISO date
}
