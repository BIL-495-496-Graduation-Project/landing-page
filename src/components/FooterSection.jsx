function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-6 py-8 text-center text-sm text-slate-400 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>© 2026 Computer Engineering Graduation Project · University Placeholder</p>
        <div className="flex gap-5">
          <a className="transition hover:text-cyan-300" href="#" aria-label="GitHub">
            GitHub
          </a>
          <a className="transition hover:text-cyan-300" href="#" aria-label="Contact">
            Contact
          </a>
          <a className="transition hover:text-cyan-300" href="#" aria-label="Project information">
            Project Info
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
