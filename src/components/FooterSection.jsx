function FooterSection({ config }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-6 py-8 text-center text-sm text-slate-400 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>© 2026 Bilgisayar Mühendisliği Mezuniyet Projesi · TOBB ETÜ · BİL/YAP 495</p>
        <div className="flex flex-wrap justify-center gap-5">
          <a className="transition hover:text-cyan-300" href={config.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-cyan-300" href={`mailto:${config.teamEmail}`}>
            İletişim
          </a>
          <a className="transition hover:text-cyan-300" href="#raporlar">
            Raporlar
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
