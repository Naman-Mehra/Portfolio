import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md p-4">
      <h1 className="text-2xl font-bold">Set your dietary profile</h1>
      <p className="mt-2 text-slate-600">We only ask what helps us protect your choices.</p>
      <div className="mt-5 space-y-3 rounded-2xl bg-white p-4 shadow-sm">
        <p className="font-medium">Diet type</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {['Vegetarian','Vegan','Halal','Jain','Egg-free','Lactose-free','Nut allergy','Custom'].map((item) => <span key={item} className="rounded-lg bg-slate-100 px-3 py-2">{item}</span>)}
        </div>
      </div>
      <Link href="/scanner" className="mt-6 block rounded-xl bg-slate-900 px-4 py-3 text-center font-semibold text-white">Continue</Link>
    </main>
  );
}
