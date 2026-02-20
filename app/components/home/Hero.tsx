import Link from 'next/link'

export default function Hero(){
  return (
    <section className="bg-primaryLight py-8 md:py-12 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-extrabold text-darkText">SkillSync — Where Skills Meet Opportunity</h1>
            <p className="mt-6 md:mt-4 text-lg md:text-xl font-medium text-darkText/80">Empowering students and recent graduates through intelligent skill-based matching. We connect early-career talent to internships and entry-level roles aligned with their strengths — while guiding them on how to grow and stay competitive.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-darkText">
              <div className="flex items-center gap-3 bg-white/90 rounded-lg p-3 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primaryLight flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="7" width="18" height="11" rx="2" stroke="#FB6C1A" strokeWidth="1.5" fill="white" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#FB6C1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-extrabold text-primary">500+</div>
                  <div className="text-sm text-darkText/80">Curated Opportunities</div>
                </div>
                <div className="ml-auto text-green-600 font-bold">✔</div>
              </div>

              <div className="flex items-center gap-3 bg-white/90 rounded-lg p-3 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primaryLight flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#FB6C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="white" />
                    <path d="M2 8v4c0 2 4 4 10 4s10-2 10-4V8" stroke="#FB6C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-extrabold text-primary">120+</div>
                  <div className="text-sm text-darkText/80">Active Internships</div>
                </div>
                <div className="ml-auto text-green-600 font-bold">✔</div>
              </div>

              <div className="flex items-center gap-3 bg-white/90 rounded-lg p-3 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primaryLight flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="11" cy="11" r="5" stroke="#FB6C1A" strokeWidth="1.5" fill="white" />
                    <path d="M21 21l-4.35-4.35" stroke="#FB6C1A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-extrabold text-primary">80%</div>
                  <div className="text-sm text-darkText/80">AI-Driven Skill Match Accuracy</div>
                </div>
                <div className="ml-auto text-green-600 font-bold">✔</div>
              </div>
            </div>
          </div>

          {/* right column intentionally removed; search moved to Jobs page */}
        </div>
      </div>
    </section>
  )
}
