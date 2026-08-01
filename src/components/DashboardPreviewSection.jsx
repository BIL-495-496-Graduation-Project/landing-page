function DemoPreviewFrame({ preview }) {
  if (preview.type === 'html') {
    return (
      <iframe
        src={preview.src}
        title={preview.title}
        className="h-[min(720px,70vh)] w-full border-0 bg-white"
        loading="lazy"
      />
    )
  }

  return (
    <a href={preview.src} target="_blank" rel="noreferrer" className="block">
      <img
        src={preview.src}
        alt={preview.title}
        className="w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </a>
  )
}

function DashboardPreviewSection({ demoVideoUrl, demoPreviews }) {
  return (
    <section id="demo" className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Demo</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Uygulama arayüz önizlemesi</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
        LazarusFinance arayüz mockup&apos;ları; haber analizi, olay penceresi ve karşılaştırmalı gösterge
        ekranlarını canlı önizleme olarak sunar.
      </p>

      {demoVideoUrl ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={demoVideoUrl}
              title="LazarusFinance demo videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}

      <div className={`grid gap-6 ${demoPreviews.length > 1 ? 'sm:grid-cols-2' : ''} ${demoVideoUrl ? 'mt-8' : 'mt-8'}`}>
        {demoPreviews.map((preview) => (
          <figure
            key={preview.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 transition duration-300 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <DemoPreviewFrame preview={preview} />
            <figcaption className="border-t border-white/10 px-5 py-4">
              <p className="text-sm font-semibold text-white">{preview.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{preview.caption}</p>
              {preview.type === 'html' ? (
                <a
                  className="mt-3 inline-block text-xs font-medium text-cyan-300 transition hover:text-cyan-200"
                  href={preview.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tam ekran aç →
                </a>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default DashboardPreviewSection
