function AboutSection() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:grid-cols-2 md:p-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">About the Project</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">AI-powered sentiment intelligence for financial markets</h2>
      </div>
      <p className="text-sm leading-relaxed text-slate-300 md:text-base">
        Our system gathers financial news streams, processes text with NLP and transformer-based AI models, and estimates market sentiment in real time. The resulting signals feed a prediction module that helps interpret potential bullish or bearish market movement.
      </p>
    </section>
  )
}

export default AboutSection
