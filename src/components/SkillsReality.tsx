export default function SkillsReality() {
  return (
    <section className="py-24 bg-background-light" id="analysis">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Skills Gap Analysis
          </h2>
          <p className="text-slate-500">
            Quantifying the distance between your current competency profile and
            the demonstrated requirements of your target role, benchmarked
            against real hiring outcome data.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <div className="space-y-12">
            {/* Bar 1 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-slate-800">
                  Your Current Competency Profile
                </span>
                <span className="text-sm font-medium text-slate-400">
                  CV, LinkedIn &amp; Self-Declared Skills
                </span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-[52%]"></div>
              </div>
            </div>

            {/* Bar 2 */}
            <div className="relative">
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-slate-800">
                  Hired Candidate Benchmark
                </span>
                <span className="text-sm font-medium text-primary">
                  Anonymised Cohort Data
                </span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden relative">
                <div className="h-full bg-primary rounded-full w-[88%] shadow-glow"></div>
              </div>
              {/* Gap Highlighter */}
              <div className="absolute top-10 left-[52%] right-[12%] h-10 border-l border-r border-dashed border-primary flex items-center justify-center px-4">
                <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                  Identified Skills Gap (-36%)
                </span>
              </div>
            </div>

            {/* Bar 3 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-slate-800">
                  Competitive Readiness Score
                </span>
                <span className="text-sm font-medium text-slate-400">
                  Post-Roadmap Projection
                </span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[91%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
