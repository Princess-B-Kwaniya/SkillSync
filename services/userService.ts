import type { User } from '../types/user'

// Mock current user - in real app this would come from auth/session
export async function getCurrentUser(): Promise<User> {
  return {
    id: 'user-001',
    name: 'Tendai M.',
    email: 'tendai@example.com',
    skills: ['Java', 'Git', 'Collections'],
    certifications: ['Microsoft Excel Specialist']
  }
}

export default { getCurrentUser }
