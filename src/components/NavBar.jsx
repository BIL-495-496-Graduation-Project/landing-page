const links = [
  { href: '#proje', label: 'Proje' },
  { href: '#demo', label: 'Demo' },
  { href: '#takim', label: 'Takım' },
  { href: '#raporlar', label: 'Raporlar' },
  { href: '#iletisim', label: 'İletişim' },
]

function NavBar({ projectName }) {
  return (
    <header className="sticky top-0 z-20 -mx-6 mb-2 border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <a href="#" className="text-lg font-semibold text-white transition hover:text-cyan-300">
          {projectName}
        </a>
        <ul className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-cyan-300" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
