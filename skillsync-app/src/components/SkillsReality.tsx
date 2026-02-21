export default function SkillsReality() {
  return (
    <section className="py-24 bg-background-light" id="gap">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            The Skills Reality
          </h2>
          <p className="text-slate-500">
            Visualizing the disconnect between curriculum and industry
            expectations.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <div className="space-y-12">
            {/* Bar 1 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-slate-800">
                  Theoretical Knowledge
                </span>
                <span className="text-sm font-medium text-slate-400">
                  Curriculum Focus
                </span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* Bar 2 */}
            <div className="relative">
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-slate-800">
                  Market-Ready Technical Skills
                </span>
                <span className="text-sm font-medium text-primary">
                  Industry Requirement
                </span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden relative">
                <div className="h-full bg-primary rounded-full w-[45%] shadow-glow"></div>
              </div>
              {/* Gap Highlighter */}
              <div className="absolute top-10 left-[45%] right-0 h-10 border-l border-dashed border-primary flex items-center px-4">
                <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                  The Rejection Gap (-55%)
                </span>
              </div>
            </div>

            {/* Bar 3 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-slate-800">
                  Soft Skills &amp; Adaptability
                </span>
                <span className="text-sm font-medium text-slate-400">
                  The Secret Sauce
                </span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-[38%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
