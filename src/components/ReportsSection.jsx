function ReportsSection({ reports }) {
  return (
    <section id="raporlar">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Raporlar</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Proje raporları</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
        Tüm raporlar herkese açık bağlantılar üzerinden PDF ve DOCX formatında indirilebilir.
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-widest text-slate-400">
            <tr>
              <th className="px-5 py-4 font-medium">Rapor</th>
              <th className="px-5 py-4 font-medium">PDF</th>
              <th className="px-5 py-4 font-medium">DOCX</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.name} className="border-b border-white/5 last:border-none">
                <td className="px-5 py-4 font-medium text-white">{report.name}</td>
                <td className="px-5 py-4">
                  <a
                    className="inline-flex rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
                    href={report.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    PDF İndir
                  </a>
                </td>
                <td className="px-5 py-4">
                  <a
                    className="inline-flex rounded-lg border border-fuchsia-300/30 bg-fuchsia-400/10 px-3 py-1.5 text-fuchsia-200 transition hover:border-fuchsia-300 hover:bg-fuchsia-400/20"
                    href={report.docx}
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOCX İndir
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ReportsSection
