const bars = [42, 65, 48, 73, 58, 85, 69]

function DashboardPreviewSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Demo Dashboard Preview</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Mock sentiment insights</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
          <p className="text-sm text-slate-300">Market Sentiment Trend</p>
          <div className="mt-5 flex h-44 items-end gap-3">
            {bars.map((bar, index) => (
              <div key={`${bar}-${index}`} className="flex flex-1 flex-col justify-end rounded-lg bg-slate-800/80 p-1">
                <div
                  className="w-full rounded-md bg-gradient-to-t from-cyan-400 to-fuchsia-500 transition duration-500"
                  style={{ height: `${bar}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-500/10 p-5">
            <p className="text-xs uppercase tracking-widest text-emerald-200">Bullish Signal</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-100">+67%</p>
            <p className="mt-1 text-sm text-emerald-200/80">Positive sentiment dominates AI score.</p>
          </div>
          <div className="rounded-2xl border border-rose-300/30 bg-rose-500/10 p-5">
            <p className="text-xs uppercase tracking-widest text-rose-200">Bearish Risk</p>
            <p className="mt-2 text-2xl font-semibold text-rose-100">-29%</p>
            <p className="mt-1 text-sm text-rose-200/80">Watch volatility from breaking macro news.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreviewSection
