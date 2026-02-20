export default function HowItWorks(){
  const steps = [
    { title: 'Create Profile', text: 'Add your skills, experience and goals.' },
    { title: 'AI Analyses You', text: 'Our engine analyzes your profile and gaps.' },
    { title: 'Get Matched', text: 'Receive role matches prioritized for your profile.' },
    { title: 'Follow Your Roadmap', text: 'Get personalized learning and tasks to improve.' },
    { title: 'Land the Job', text: 'Apply confidently and track your outcomes.' }
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-white p-6 shadow-sm hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">{i+1}</div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-darkText/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
