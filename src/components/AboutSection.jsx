function AboutSection({ problem, solution, scope }) {
  return (
    <section id="proje" className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:grid-cols-2 md:p-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Proje Açıklaması</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Problem ve çözüm yaklaşımımız
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-rose-300">Problem</p>
            <p>{problem}</p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-emerald-300">Çözüm</p>
            <p>{solution}</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-widest text-cyan-300">Proje Kapsamı</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-300 md:text-base">
          {scope.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
