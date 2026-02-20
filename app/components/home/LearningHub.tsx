export default function LearningHub(){
  const items = [
    { title: 'Google Digital Garage', desc: 'Free digital marketing & career courses', url: 'https://learndigital.withgoogle.com/digitalgarage' },
    { title: 'AWS Certification', desc: 'Cloud Practitioner & beginner guides', url: 'https://aws.amazon.com/certification/' },
    { title: 'HubSpot Certification', desc: 'Content marketing & inbound', url: 'https://academy.hubspot.com/certifications' },
    { title: 'Interview Tips (YouTube)', desc: 'Improve your interview skills', url: 'https://www.youtube.com/watch?v=H7v2PDdE4Ss' }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Learning Hub</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map(i => (
            <div key={i.title} className="rounded-xl p-4 shadow-sm hover:-translate-y-1 transition-all">
              <h4 className="font-semibold">{i.title}</h4>
              <p className="text-sm text-darkText/70 mt-2">{i.desc}</p>
              <a className="inline-block mt-3 text-primary" href={i.url} target="_blank" rel="noreferrer">Open link →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
