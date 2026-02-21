export default function Superpowers() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              One Platform.
              <br />
              Six Core Capabilities.
            </h2>
            <p className="text-slate-500 text-lg">
              A unified career intelligence experience — from competency
              profiling to competitive benchmarking — designed for job seekers,
              career changers, and returning professionals.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl hidden md:block">
            <span className="text-primary font-bold text-sm">
              AI-Powered Career Intelligence
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 — Job Matching */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                work
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AI Job Matching
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Continuously matches your competency profile against live job
              listings from multiple sources, producing ranked results with a
              computed Match Score (0-100) and full breakdown.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Multi-source job aggregation
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Explainability panel per match
              </li>
            </ul>
          </div>

          {/* Card 2 — Skills Gap Analysis */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                analytics
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Skills Gap Analysis
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Quantifies the precise delta between your current profile and the
              demonstrated competency requirements of your target role,
              benchmarked against real hiring outcome data.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Required and competitive gaps
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Skills Radar visualisation
              </li>
            </ul>
          </div>

          {/* Card 3 — Learning Roadmap */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                route
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Learning Roadmaps
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Generates a sequenced, personalised action plan with recommended
              courses, project briefs, and certifications — calibrated to your
              weekly availability and target role.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Milestone-based tracking
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Projected completion dates
              </li>
            </ul>
          </div>

          {/* Card 4 — Application Analytics */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                monitoring
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Application Analytics
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Track application outcomes, response rates, and interview
              conversion metrics. AI-generated insights identify what is working
              in your job search strategy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Performance trend analysis
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Sector and channel breakdown
              </li>
            </ul>
          </div>

          {/* Card 5 — Competitive Benchmarking */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                group
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Competitive Benchmarking
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Compare your profile against anonymised cohort data of
              successfully hired candidates. A Competitive Readiness Score
              (0-100) measures your proximity to the benchmark.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Side-by-side cohort comparison
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Fully anonymised data
              </li>
            </ul>
          </div>

          {/* Card 6 — Industry Intelligence */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                trending_up
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Industry Intelligence
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Continuously updated, sector-specific insights on emerging skill
              demands, hiring activity trends, salary movements, and market
              signals relevant to your target role.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Weekly Market Brief
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Company follow alerts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
