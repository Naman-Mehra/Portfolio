const scans = [
  { name: 'Granola Bites', verdict: 'Possibly Unsafe', time: '2h ago' },
  { name: 'Tomato Soup', verdict: 'Safe to Eat', time: 'Yesterday' }
];

export default function HistoryPage() {
  return <main className="mx-auto min-h-screen w-full max-w-md p-4"><h1 className="text-2xl font-bold">Scan history</h1><div className="mt-4 space-y-3">{scans.map((scan) => <article key={scan.name} className="rounded-2xl bg-white p-4 shadow-sm"><p className="font-semibold">{scan.name}</p><p className="text-sm text-slate-600">{scan.verdict}</p><p className="text-xs text-slate-500">{scan.time}</p></article>)}</div></main>;
}
