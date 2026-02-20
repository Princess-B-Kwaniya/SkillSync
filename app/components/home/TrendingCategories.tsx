export default function TrendingCategories(){
  const cats = ['IT & Software','Digital Marketing','Data Analytics','Cloud & DevOps','Finance','Hospitality','Education']
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-bold">Trending Categories</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {cats.map(c => (
            <a key={c} href={`/jobs?category=${encodeURIComponent(c)}`} className="px-4 py-2 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition">{c}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
