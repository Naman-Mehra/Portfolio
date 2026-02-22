import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-between p-4">
      <section className="pt-6">
        <h1 className="text-3xl font-bold">Dietary Assistant</h1>
        <p className="mt-2 text-slate-600">Core actions are one tap away: Scan, Search, and Profile.</p>
      </section>

      <nav className="grid gap-3 pb-6" aria-label="Primary tabs">
        <Link className="min-h-11 rounded-2xl bg-blue-600 px-4 py-4 text-center text-lg font-semibold text-white" href="/scanner">
          Scan
        </Link>
        <Link className="min-h-11 rounded-2xl bg-slate-900 px-4 py-4 text-center text-lg font-semibold text-white" href="/search">
          Search
        </Link>
        <Link className="min-h-11 rounded-2xl bg-white px-4 py-4 text-center text-lg font-semibold text-slate-900 shadow-sm" href="/profile">
          Profile
        </Link>
      </nav>
    </main>
  );
}
