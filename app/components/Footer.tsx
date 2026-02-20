export default function Footer(){
  return (
    <footer className="border-t border-slate-100 py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SKILLSYNC
      </div>
    </footer>
  )
}
