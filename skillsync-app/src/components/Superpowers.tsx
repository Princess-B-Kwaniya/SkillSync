export default function Superpowers() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              One Platform.
              <br />
              Three Superpowers.
            </h2>
            <p className="text-slate-500 text-lg">
              We didn&apos;t build another course catalog. We built a career
              accelerator that mirrors the modern workplace.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl hidden md:block">
            <span className="text-primary font-bold text-sm">
              Empowering 10k+ Graduates Monthly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                precision_manufacturing
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Precision Upskilling
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              AI-driven curriculum that adjusts to your existing knowledge,
              focusing only on what the market demands today.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Hyper-relevant modules
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Real-time skill tracking
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                sdk
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Real-world Sims
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Work in simulated environments using Slack, Jira, and GitHub. No
              multiple-choice tests, just real output.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Toolchain proficiency
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Agile workflow practice
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:shadow-glow transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                hub
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Direct Network
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Skip the HR black hole. Our partner companies hire directly from
              SkillSync based on your validated performance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                Verified talent pool
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                No-interview hiring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
