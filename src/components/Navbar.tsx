export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="glass-nav border border-slate-200/50 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg shadow-glow">
            <span className="material-symbols-outlined text-white text-xl block">
              account_tree
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            SkillSync
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a className="hover:text-primary transition-colors" href="#features">
            Platform
          </a>
          <a className="hover:text-primary transition-colors" href="#analysis">
            Skills Analysis
          </a>
          <a className="hover:text-primary transition-colors" href="#how-it-works">
            How It Works
          </a>
          <a className="hover:text-primary transition-colors" href="#outcomes">
            Outcomes
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-bold text-slate-700 hover:text-primary px-4 py-2 transition-colors">
            Sign In
          </button>
          <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
