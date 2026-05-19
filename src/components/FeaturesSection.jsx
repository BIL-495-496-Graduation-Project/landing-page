const features = [
  { title: 'News Sentiment Analysis', desc: 'Extracts polarity and confidence from financial headlines and reports.', icon: '📰' },
  { title: 'AI-based Prediction', desc: 'Uses learned sentiment patterns to support market direction forecasting.', icon: '🤖' },
  { title: 'Financial Data Processing', desc: 'Cleans and combines market data with text-based signals.', icon: '📈' },
  { title: 'Real-time Pipeline', desc: 'Continuously ingests and evaluates incoming data streams.', icon: '⚡' },
  { title: 'Visualization Dashboard', desc: 'Displays trends, signal strength, and market outlook clearly.', icon: '📊' },
]

function FeaturesSection() {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Features</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Core capabilities</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 text-lg">
              <span aria-hidden="true">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{feature.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
