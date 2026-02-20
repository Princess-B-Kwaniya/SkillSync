import Link from 'next/link'

export default function CTASection(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Start Your Career Journey</h2>
        <p className="mt-2 text-darkText/70">Create a profile, get matched and apply to youth-focused roles today.</p>
        <div className="mt-6">
          <Link href="/auth/login?next=/profile" className="bg-primary text-white px-6 py-3 rounded-full">Create your free profile</Link>
        </div>
      </div>
    </section>
  )
}
