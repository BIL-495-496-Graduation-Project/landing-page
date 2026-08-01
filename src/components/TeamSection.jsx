const members = [
  { name: 'Ataberk Tekin', role: 'ML Engineer' },
  { name: 'Osman Kaymakçı', role: 'Backend Developer' },
  { name: 'Ahmet Kaan Tırhış', role: 'Frontend Developer' },
  { name: 'Mehmet Begun', role: 'Data Engineer' },
  { name: 'Taha Mert Ağım', role: 'Backend Developer'}
]

function TeamSection() {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Team</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Project contributors</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {members.map((member, index) => (
          <article
            key={`${member.role}-${index}`}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40"
          >
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-300/40 to-fuchsia-500/40" />
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-slate-300">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
