import Link from 'next/link';

export default function SplashPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-between p-6">
      <section className="pt-16">
        <p className="text-sm font-semibold tracking-wide text-emerald-700">SafeBite AI</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight">Shop with confidence, not confusion.</h1>
        <p className="mt-4 text-base text-slate-600">Built for international shoppers navigating ingredient uncertainty.</p>
      </section>
      <section className="space-y-3 pb-8">
        <Link href="/onboarding" className="block rounded-2xl bg-emerald-600 px-4 py-4 text-center text-lg font-semibold text-white">Get started</Link>
        <Link href="/scanner" className="block rounded-2xl bg-white px-4 py-4 text-center text-lg font-semibold text-slate-900 shadow-sm">Skip to scanner</Link>
      </section>
    </main>
  );
}
