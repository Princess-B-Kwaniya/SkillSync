export default function YouthPriority(){
  return (
    <section className="py-10 bg-primaryLight rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">🎯 First Experience Opportunities</h3>
            <p className="text-sm text-darkText/70 mt-1">Internships and graduate programs prioritized for youth.</p>
          </div>
          <div>
            <a href="/jobs?level=internship" className="bg-primary text-white px-4 py-2 rounded-full">Explore Youth Roles</a>
          </div>
        </div>
      </div>
    </section>
  )
}
