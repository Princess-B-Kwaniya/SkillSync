export default function ResourcesPage(){
  const skills = [
    'Web Development (HTML/CSS/JS)',
    'Cloud Computing (AWS Fundamentals)',
    'Data Analytics',
    'Digital Marketing',
    'Cybersecurity',
    'Soft Skills (Communication)'
  ]

  return (
    <section className="container py-12">
      <h1 className="text-2xl font-bold">Learning Hub</h1>
      <p className="mt-2 text-slate-600">Guided learning resources and certifications to help you get job-ready.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold">Trending Skills</h3>
          <ul className="mt-3 list-disc list-inside text-slate-600">
            {skills.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="card">
          <h3 className="font-semibold">Certifications & Links</h3>
          <ul className="mt-3 list-disc list-inside text-slate-600">
            <li><a className="text-primary" href="https://learndigital.withgoogle.com/digitalgarage">Google Digital Garage</a></li>
            <li><a className="text-primary" href="https://aws.amazon.com/certification/">AWS Cloud Practitioner</a></li>
            <li><a className="text-primary" href="https://academy.hubspot.com/certifications">HubSpot Content Marketing</a></li>
            <li><a className="text-primary" href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals">Microsoft Azure Fundamentals</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 card">
        <h3 className="font-semibold">Video Tutorials</h3>
        <ul className="mt-3 list-disc list-inside text-slate-600">
          <li><a className="text-primary" href="https://www.youtube.com/watch?v=H7v2PDdE4Ss">CrashCourse: Job Search Tips</a></li>
          <li><a className="text-primary" href="https://www.youtube.com/watch?v=3GzHjxMeAio">Digital Marketing for Beginners</a></li>
          <li><a className="text-primary" href="https://www.youtube.com/watch?v=Ia-7m55s821">AWS Cloud Certification Guide</a></li>
        </ul>
      </div>
    </section>
  )
}
