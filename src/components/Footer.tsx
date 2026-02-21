import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-24 relative overflow-hidden">
      {/* Glow accents */}
      <div className="absolute -top-24 -right-24 size-96 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 size-96 bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
          Begin Your Career Intelligence Journey
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Create your profile, upload your CV, and receive your first AI-powered
          job matches and Skills Gap Report within minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Link href="/signup" className="w-full sm:w-auto px-12 py-4 bg-primary text-white font-bold rounded-xl shadow-glow hover:bg-primary/90 transition-all text-xl">
            Create Your Account
          </Link>
          <Link href="/contact" className="w-full sm:w-auto px-12 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all text-xl">
            Contact Us
          </Link>
        </div>

        <hr className="border-slate-800 mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <span className="material-symbols-outlined text-white text-base block">
                account_tree
              </span>
            </div>
            <span className="text-2xl font-black text-white">SkillSync</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-slate-500">
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              Documentation
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#"
            >
              Support
            </a>
          </div>

          <div className="flex gap-4">
            <a
              className="size-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
              href="#"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              className="size-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
              href="#"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-600 text-xs">
          &copy; 2026 SkillSync. All rights reserved. Career Intelligence
          Platform.
        </div>
      </div>
    </footer>
  );
}
