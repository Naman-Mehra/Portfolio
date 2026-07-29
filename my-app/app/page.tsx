const projects = [
  {
    year: '2026',
    title: 'Ingredient Intelligence',
    type: 'Product design | AI guidance',
    gradient: 'from-lime-200 via-emerald-400 to-teal-900'
  },
  {
    year: '2025',
    title: 'Scanner Flow',
    type: 'Mobile experience',
    gradient: 'from-orange-200 via-rose-300 to-stone-900'
  },
  {
    year: '2025',
    title: 'Dietary Profiles',
    type: 'Visual system',
    gradient: 'from-sky-200 via-indigo-300 to-slate-950'
  },
  {
    year: '2024',
    title: 'SafeBite Launch',
    type: 'Marketing website',
    gradient: 'from-amber-100 via-yellow-300 to-emerald-800'
  }
];

const capabilities = ['Barcode scanning', 'Allergen checks', 'Dietary profiles', 'Confidence scores'];

export default function SplashPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-[#f6f1e8]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,230,202,0.16),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_100%,72px_72px,72px_72px]" />
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-40 blur-[1px]" />

      <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#11100e]/80 p-1 text-[0.65rem] uppercase tracking-[0.45em] text-white/60 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {['Home', 'Works', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-3 transition hover:bg-white hover:text-black">
            {item}
          </a>
        ))}
      </nav>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 py-7 md:px-10">
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-white/50">
          <span>SafeBite AI</span>
          <span>Portfolio / 2026</span>
        </header>

        <div className="grid items-end gap-10 py-20 md:grid-cols-[1fr_0.72fr] md:py-10">
          <div className="space-y-8">
            <p className="reveal text-sm uppercase tracking-[0.55em] text-emerald-200/80">Shop with clarity</p>
            <h1 className="hero-title reveal-delay text-[clamp(4.2rem,15vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">
              Safe<br />Bite
            </h1>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/70">
              {capabilities.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-4 py-3 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-card group relative min-h-[34rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#171511] p-4 shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-lime-300 to-[#12110f] opacity-90 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-8 rounded-[2rem] border border-black/10 bg-black/10" />
            <div className="relative flex h-full flex-col justify-between rounded-[2rem] bg-[#f6f1e8]/90 p-7 text-[#11100e]">
              <div className="flex justify-between text-xs uppercase tracking-[0.3em]">
                <span>Scan result</span>
                <span>98%</span>
              </div>
              <div className="space-y-5">
                <div className="h-32 rounded-[1.7rem] bg-[#11100e] p-4 text-[#f6f1e8]">
                  <div className="mb-8 h-2 w-16 rounded-full bg-emerald-300" />
                  <p className="text-3xl font-black uppercase leading-none tracking-[-0.06em]">Vegan friendly</p>
                </div>
                <p className="max-w-sm text-lg leading-tight text-black/70">A premium, motion-led interface for ingredient confidence and dietary decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 py-10 text-center uppercase tracking-[0.65em] text-white/60">
        <div className="marquee flex whitespace-nowrap text-2xl md:text-5xl">
          <span>Ingredient clarity · Dietary safety · Better shopping ·&nbsp;</span>
          <span>Ingredient clarity · Dietary safety · Better shopping ·&nbsp;</span>
        </div>
      </section>

      <section id="works" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          <h2 className="text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]">Curated<br />Projects</h2>
          <p className="self-end text-xl leading-relaxed text-white/60">A selection of product moments shaped with warm contrast, generous spacing, tactile cards, and soft kinetic transitions.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card group overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-3" style={{ animationDelay: `${index * 120}ms` }}>
              <div className={`min-h-[25rem] rounded-[1.8rem] bg-gradient-to-br ${project.gradient} p-6 transition duration-700 group-hover:scale-[1.02]`}>
                <div className="flex justify-between text-xs uppercase tracking-[0.35em] text-black/60">
                  <span>{project.year}</span>
                  <span>View project</span>
                </div>
              </div>
              <div className="flex items-end justify-between gap-6 px-3 py-5">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.05em]">{project.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/40">{project.type}</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-black">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-5 pb-32 pt-12 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.6em] text-white/40">Let&apos;s build something</p>
        <h2 className="mx-auto mt-6 max-w-5xl text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">Meaningful and memorable</h2>
        <a href="mailto:hello@safebite.ai" className="mt-10 inline-flex rounded-full border border-white/15 px-8 py-5 text-sm uppercase tracking-[0.45em] transition hover:bg-white hover:text-black">Reach out</a>
      </footer>
    </main>
  );
}
