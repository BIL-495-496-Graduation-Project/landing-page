function WorkflowSection({ steps }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Mimari / İş Akışı</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Pipeline özeti</h2>
      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 md:flex-1">
            <div className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/10">
              {step}
            </div>
            {index < steps.length - 1 && <span className="hidden text-cyan-300 md:inline">→</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkflowSection
