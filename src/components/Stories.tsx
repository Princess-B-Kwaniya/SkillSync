import Image from "next/image";

const stories = [
  {
    name: "Thabo Molefe",
    role: "Graduate — Junior Software Engineer",
    quote:
      '"The Skills Gap Report identified exactly which competencies I was missing for my target role. Within three months of following the roadmap, my Match Score went from 42 to 87 and I secured a position."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVL1m6AvgZ_3XQuloOacntw8cTVCvhHjbg3xb6d3Wca3yuBuIRACr7dg5l1thp4Jb394j5zADeV0e7NA-GuuWeGpxtf2LFEr5Q9ngWnbcs_4zKEMc2IOvnzYkjRruTZ5YvbON2tVQUxmhzM_SsVnAYtsLPIfAjpHP0X8ZUBsznzf-PUTQMBTzbKIMTkGY72dpCmNVYyno5S8pZ4Inug7lvsJ7q8dkJ9t5F6uZjFUQE_Y81BYd3QgoZiOBv1xkh6UUqCgejwnav5gY",
    borderColor: "border-primary",
    starColor: "text-primary",
  },
  {
    name: "Naledi Dlamini",
    role: "Career Changer — Data Analyst",
    quote:
      '"Transitioning from finance to data analytics felt overwhelming until the competitive benchmarking showed me exactly where I stood relative to hired candidates. The transferable skills analysis gave me confidence I was closer than I thought."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXEr4EIWUdemHHFmrdrW4vIwaVok11m-h6d2wiX4R0bjS9en0r63zGctkuzQWFUCAU84K4yckyjSjwWGZ-JYJUsywboeMRSNyL4rGtnVw82p0zGZKaicTIDGnSLIrc9Rt-oA2PQ2OhFdMzQXMt4OooIWP4dk7FD2m_VKXZBhreYuT-V-K2AdYhwMm-FXUhAqyeYEkwaqgJHCiY-ZCqUF6JNiIUVXMz8acf5PNUsL0qSyOT71HKYKLfbomFVU7kYVWeqRym--3DwwA",
    borderColor: "border-amber-500",
    starColor: "text-amber-500",
  },
  {
    name: "Fatima Osei",
    role: "Returnee — Project Coordinator",
    quote:
      '"After a four-year career break, I had no recent employment history to show. SkillSync handled my sparse profile gracefully and built a roadmap that accounted for the informal skills I had developed. The application analytics helped me refine my strategy."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqR4Wbl_0CiQZH3qjkQjTh7lwBKTRMWu6HfV97_TNuh9T-xihGR3mPD7oAqXk9UgBxlI_nXImvIQywqYW9YlHqkAOE9bERnPCuaAA_3iRM_vek0CXJkAZDQ58lCJ86_LPRbUFLY0x6PSQ3BjI4fLnhqzvyYRlDaERvjEZS9JfXl8lieThXx9G05URtLIEHaW0WuV9SCOIkSYa_sLwtrplvfBLTBj4L0IEcMt4V_Vex33UNACVOHYDYtAdQY-FK5IlDZ5CdHi-rxOA",
    borderColor: "border-primary",
    starColor: "text-primary",
  },
];

export default function Stories() {
  return (
    <section className="py-24 bg-white" id="outcomes">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            User Outcomes
          </h2>
          <p className="text-slate-500">
            How job seekers, career changers, and returning professionals are
            using SkillSync to close the gap between qualifications and
            employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.name}
              className={`group p-8 rounded-2xl border-l-4 ${story.borderColor} bg-slate-50 shadow-sm hover:shadow-md transition-all`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 rounded-full bg-slate-200 overflow-hidden relative">
                  <Image
                    alt={story.name}
                    src={story.image}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{story.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    {story.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic mb-6">{story.quote}</p>
              <div className={`flex items-center gap-1 ${story.starColor}`}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined fill-1 text-sm"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
