function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TeamSection({ members }) {
  return (
    <section id="takim">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Takım</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Proje ekibi</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
        Bilgisayar Mühendisliği mezuniyet projesi kapsamında görev alan ekip üyeleri.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => (
          <article
            key={member.name}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40"
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/40 to-fuchsia-500/40 text-sm font-semibold text-white">
                {getInitials(member.name)}
              </div>
            )}
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-cyan-200">{member.role}</p>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">{member.bio}</p>
            <a
              className="mt-4 inline-block text-xs font-medium text-slate-300 transition hover:text-cyan-300"
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
