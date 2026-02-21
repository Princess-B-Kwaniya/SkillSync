export default function Stats() {
  return (
    <section className="bg-white border-y border-slate-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="relative group">
            <span className="material-symbols-outlined text-primary/40 text-4xl mb-4 block">
              sentiment_dissatisfied
            </span>
            <h3 className="text-5xl font-black text-slate-900 mb-2">82%</h3>
            <p className="text-slate-500 font-medium">
              Hiring Manager Dissatisfaction
            </p>
            <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined text-primary/40 text-4xl mb-4 block">
              trending_down
            </span>
            <h3 className="text-5xl font-black text-slate-900 mb-2">34%</h3>
            <p className="text-slate-500 font-medium">
              Graduate Job Confidence
            </p>
            <div className="h-1 w-12 bg-rose-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined text-primary/40 text-4xl mb-4 block">
              compare_arrows
            </span>
            <h3 className="text-5xl font-black text-slate-900 mb-2">65%</h3>
            <p className="text-slate-500 font-medium">
              Job Requirement Mismatch
            </p>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
