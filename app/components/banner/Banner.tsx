"use client"

function IconGraduation(){
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#0f172a" strokeWidth="0.8" strokeLinejoin="round"/>
      <path d="M2 7v4c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5V7" stroke="#0f172a" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M12 11v9" stroke="#0f172a" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
  )
}

function IconBriefcase(){
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="#0f172a" strokeWidth="0.8"/>
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#0f172a" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
  )
}

function IconStats(){
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0f172a" strokeWidth="0.8"/>
      <path d="M7 16v-6M11 16v-2M15 16v-9" stroke="#0f172a" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Avatar({ initials = 'Z' }: { initials?: string }){
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="rounded-full">
      <rect width="48" height="48" rx="8" fill="#f1f5f9" />
      <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#0f172a" fontFamily="Inter, sans-serif">{initials}</text>
    </svg>
  )
}

export default function Banner(){
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6 text-center">
        {/* CTA removed per request */}
      </div>
    </section>
  )
}
