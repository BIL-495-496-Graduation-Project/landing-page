function TechnologiesSection({ technologies }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Kullanılan Teknolojiler</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Modern yapay zeka ve web yığını</h2>
      <div className="mt-7 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection
