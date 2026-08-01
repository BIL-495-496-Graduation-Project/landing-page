function ContactSection({ advisor, teamEmail, githubUrl }) {
  return (
    <section id="iletisim" className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">İletişim</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Danışman ve takım bilgileri</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-cyan-300">Proje Danışmanı</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{advisor.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{advisor.title}</p>
          <p className="mt-1 text-sm text-slate-400">{advisor.department}</p>
          <a
            className="mt-4 inline-block text-sm text-cyan-300 transition hover:text-cyan-200"
            href={`mailto:${advisor.email}`}
          >
            {advisor.email}
          </a>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-fuchsia-300">Takım İletişimi</p>
          <h3 className="mt-3 text-xl font-semibold text-white">LazarusFinance Takımı</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Proje, demo ve iş birliği talepleri için takım e-posta adresimizi kullanabilirsiniz.
          </p>
          <a
            className="mt-4 inline-block text-sm text-cyan-300 transition hover:text-cyan-200"
            href={`mailto:${teamEmail}`}
          >
            {teamEmail}
          </a>
          <a
            className="mt-4 block text-sm text-slate-300 transition hover:text-cyan-300"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Deposu →
          </a>
        </article>
      </div>
    </section>
  )
}

export default ContactSection
