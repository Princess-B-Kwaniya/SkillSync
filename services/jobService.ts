import type { Job } from '../types/job'

const JOBS: Job[] = [
  {
    id: 'job-ict-001',
    title: 'ICT Support Technician',
    company: 'TechServe',
    location: 'Harare, Zimbabwe',
    requiredSkills: ['Hardware Troubleshooting', 'Windows', 'Customer Support'],
    experienceLevel: 'entry',
    certifications: ['CompTIA A+ (advantage)'],
    description: 'Provide first-line IT support, troubleshoot user hardware and software issues.',
    applicationDeadline: '2026-06-30'
  },
  {
    id: 'job-ict-002',
    title: 'Junior Network Technician',
    company: 'NetLink Solutions',
    location: 'Bulawayo, Zimbabwe',
    requiredSkills: ['Networking Basics', 'Routing', 'Switching'],
    experienceLevel: 'entry',
    certifications: ['Cisco CCNA (advantage)'],
    description: 'Assist with network installation, monitoring and basic troubleshooting tasks.',
    applicationDeadline: '2026-07-05'
  },
  {
    id: 'job-ict-003',
    title: 'Junior Software Developer',
    company: 'Harare Tech Labs',
    location: 'Harare, Zimbabwe',
    requiredSkills: ['JavaScript', 'Git', 'Problem Solving'],
    experienceLevel: 'graduate',
    certifications: [],
    description: 'Work with a small team building web applications and services.',
    applicationDeadline: '2026-07-10'
  },
  {
    id: 'job-ict-004',
    title: 'Frontend Developer (Junior)',
    company: 'PixelEdge',
    location: 'Remote',
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React'],
    experienceLevel: 'entry',
    certifications: [],
    description: 'Implement UI features and improve application accessibility and performance.',
    applicationDeadline: '2026-07-15'
  },
  {
    id: 'job-ict-005',
    title: 'Junior Data Analyst',
    company: 'DataWorks',
    location: 'Mutare, Zimbabwe',
    requiredSkills: ['Excel', 'SQL', 'Data Cleaning'],
    experienceLevel: 'entry',
    certifications: ['SQL Fundamentals (advantage)'],
    description: 'Collect, clean and prepare datasets for reporting and basic analysis.',
    applicationDeadline: '2026-07-20'
  },
  {
    id: 'job-ict-006',
    title: 'Cloud Operations Trainee',
    company: 'NimbusCloud',
    location: 'Remote',
    requiredSkills: ['Linux Basics', 'Cloud Fundamentals', 'Scripting'],
    experienceLevel: 'internship',
    certifications: ['AWS Cloud Practitioner (recommended)'],
    description: 'Support cloud operations and learn platform fundamentals in a trainee program.',
    applicationDeadline: '2026-07-25'
  },
  {
    id: 'job-ict-007',
    title: 'IT Security Assistant (Junior)',
    company: 'SecureIT',
    location: 'Harare, Zimbabwe',
    requiredSkills: ['Security Awareness', 'Basic Networking', 'Monitoring'],
    experienceLevel: 'entry',
    certifications: ['Intro to Cybersecurity (advantage)'],
    description: 'Help monitor security alerts, assist with vulnerability checks and awareness training.',
    applicationDeadline: '2026-08-01'
  },
  {
    id: 'job-ict-008',
    title: 'DevOps Junior Engineer',
    company: 'DeployHQ',
    location: 'Harare, Zimbabwe',
    requiredSkills: ['CI/CD', 'Docker', 'Linux'],
    experienceLevel: 'graduate',
    certifications: [],
    description: 'Support deployment pipelines and learn infrastructure-as-code practices.',
    applicationDeadline: '2026-08-05'
  },
  {
    id: 'job-ict-009',
    title: 'Mobile App Developer (Junior)',
    company: 'AppStudio',
    location: 'Bulawayo, Zimbabwe',
    requiredSkills: ['React Native', 'JavaScript', 'APIs'],
    experienceLevel: 'entry',
    certifications: [],
    description: 'Build and maintain cross-platform mobile applications.',
    applicationDeadline: '2026-08-10'
  },
  {
    id: 'job-ict-010',
    title: 'Database Administrator Trainee',
    company: 'LedgerWorks',
    location: 'Harare, Zimbabwe',
    requiredSkills: ['SQL', 'Backups', 'Performance Basics'],
    experienceLevel: 'internship',
    certifications: [],
    description: 'Assist DBAs with maintenance, backups and basic performance tasks.',
    applicationDeadline: '2026-08-15'
  }
]

export async function getJobs(): Promise<Job[]> {
  // Placeholder: later integrate real job APIs or aggregators
  return JOBS
}

export async function getJobById(id: string): Promise<Job | undefined> {
  return JOBS.find(j => j.id === id)
}

export default { getJobs, getJobById }
