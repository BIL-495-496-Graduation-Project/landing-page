function HeroSection({ config }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur md:p-12">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-200">
        YAPAY ZEKA · BIST100 · KARAR DESTEK
      </div>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
        {config.projectName}
        <span className="block bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          {config.subtitle}
        </span>
      </h1>
      <p className="mt-5 max-w-2xl text-sm text-slate-300 md:text-lg">{config.summary}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#demo"
          className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          Demoya Git
        </a>
        <a
          href={config.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:border-cyan-300 hover:bg-white/10"
        >
          GitHub Deposu
        </a>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10">
          <p className="text-xs uppercase tracking-widest text-slate-400">Piyasa Kapsamı</p>
          <p className="mt-2 text-lg font-semibold leading-snug text-cyan-200">BIST100 · Sektör · USD/TRY</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-fuchsia-300/40 hover:bg-fuchsia-400/10">
          <p className="text-xs uppercase tracking-widest text-slate-400">NLP Modelleri</p>
          <p className="mt-2 text-lg font-semibold leading-snug text-fuchsia-200">FinBERT · BERT</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-emerald-300/40 hover:bg-emerald-400/10">
          <p className="text-xs uppercase tracking-widest text-slate-400">Veri Kaynakları</p>
          <p className="mt-2 text-lg font-semibold leading-snug text-emerald-200">KAP · Yahoo Finance</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
