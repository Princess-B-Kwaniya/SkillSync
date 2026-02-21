import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Career Intelligence Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
          Data-Driven Career
          <br />
          <span className="text-primary italic">Intelligence,</span> Delivered.
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          SkillSync bridges the gap between graduate qualifications and
          market-ready competence through AI-powered job matching, precision
          skills gap analysis, and personalised learning roadmaps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all text-lg">
            Create Your Profile
          </Link>
          <Link href="#features" className="w-full sm:w-auto px-10 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all text-lg border border-slate-200">
            Explore the Platform
          </Link>
        </div>

        {/* Hero Line Art Visual */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">
                  person_search
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Your Profile
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">
                  trending_up
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Career Match
              </span>
            </div>
          </div>

          {/* Connecting Line Art */}
          <svg
            className="w-full h-24 absolute top-4 left-0 -z-10"
            preserveAspectRatio="none"
            viewBox="0 0 800 100"
          >
            <path
              d="M 50 40 C 200 40, 600 40, 750 40"
              fill="none"
              stroke="#f48c25"
              strokeDasharray="12 8"
              strokeWidth="2"
            />
            <circle cx="50" cy="40" fill="#f48c25" r="4" />
            <circle cx="750" cy="40" fill="#f48c25" r="4" />
            {/* Animated Pulse */}
            <circle fill="#f48c25" r="4">
              <animateMotion
                dur="3s"
                path="M 50 40 C 200 40, 600 40, 750 40"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>
    </section>
  );
}
