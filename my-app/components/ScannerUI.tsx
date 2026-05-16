'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CameraIcon, InformationCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';

type Safety = 'safe' | 'unsafe' | 'caution' | 'unknown';
type Sensitivity = 'strict' | 'moderate' | 'flexible';

interface Ingredient {
  name: string;
  safety: Safety;
  why: string;
  source: string;
  confidence: number;
}

const sampleIngredients: Ingredient[] = [
  { name: 'Oat Flour', safety: 'safe', why: 'Plant-based and compatible.', source: 'OpenFoodFacts + model inference', confidence: 0.96 },
  { name: 'Whey Powder', safety: 'unsafe', why: 'Milk-derived ingredient and not vegan.', source: 'Ingredient ontology', confidence: 0.94 },
  { name: 'Mono and Diglycerides', safety: 'caution', why: 'Source can be plant or animal derived.', source: 'Regulatory label pattern', confidence: 0.66 },
  { name: 'E120', safety: 'unsafe', why: 'Cochineal color from insects.', source: 'Additive library', confidence: 0.91 }
];

export function ScannerUI() {
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<Safety | null>(null);
  const [selected, setSelected] = useState<Ingredient | null>(null);
  const [sensitivity, setSensitivity] = useState<Sensitivity>('strict');

  const decisionText = useMemo(() => {
    if (!result) return null;
    if (result === 'safe') return 'This product appears to match your dietary preferences.';
    if (result === 'unsafe') return 'This product may not match your dietary preferences.';
    if (result === 'caution') return 'Potentially unsafe. Manual verification recommended.';
    return 'Some ingredients could not be verified.';
  }, [result]);

  const startScan = () => {
    setProcessing(true);
    setResult(null);
    setTimeout(() => {
      setProcessing(false);
      setResult(sensitivity === 'flexible' ? 'caution' : 'unsafe');
    }, 1200);
  };

  const StatusIcon = result === 'safe' ? CheckCircleIcon : result === 'unsafe' ? XCircleIcon : result === 'caution' ? ExclamationTriangleIcon : QuestionMarkCircleIcon;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 px-4 py-5">
      <header className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-sm font-medium text-emerald-700">SafeBite AI</p>
        <h1 className="mt-1 text-2xl font-bold leading-tight">Your calm shopping companion</h1>
        <p className="mt-2 text-sm text-slate-600">Scan packaging and get clear ingredient guidance in seconds.</p>
      </header>

      <section className="grid grid-cols-3 gap-2 text-xs">
        <Link href="/history" className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm">History</Link>
        <Link href="/preferences" className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm">Preferences</Link>
        <Link href="/accessibility" className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm">Accessibility</Link>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Sensitivity</h2>
        <div className="mt-3 flex gap-2">
          {(['strict', 'moderate', 'flexible'] as const).map((level) => (
            <button key={level} onClick={() => setSensitivity(level)} className={`rounded-full px-4 py-2 text-sm capitalize ${sensitivity === level ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>
              {level}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-5 text-center shadow-sm">
        <CameraIcon className="mx-auto h-10 w-10 text-slate-500" />
        <h2 className="mt-2 text-xl font-semibold">Scan product label</h2>
        <p className="mt-1 text-sm text-slate-600">Take photos of the front, ingredients, and optional barcode.</p>
        <Button onClick={startScan} className="mt-4 w-full rounded-xl bg-emerald-600 text-base">Start AI scan</Button>
      </section>

      {processing && (
        <section className="rounded-3xl bg-amber-50 p-4 text-sm shadow-sm" aria-live="polite">
          <div className="flex items-center gap-2"><SparklesIcon className="h-5 w-5" />Analyzing ingredients and hidden additives…</div>
        </section>
      )}

      {result && (
        <section className="rounded-3xl bg-white p-4 shadow-sm" aria-live="polite">
          <div className="flex items-start gap-3">
            {StatusIcon && <StatusIcon className={`h-8 w-8 ${result === 'safe' ? 'text-emerald-600' : result === 'unsafe' ? 'text-red-600' : 'text-amber-600'}`} />}
            <div>
              <h3 className="text-xl font-bold capitalize">{result === 'caution' ? 'Possibly unsafe' : result}</h3>
              <p className="text-sm text-slate-700">{decisionText}</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {sampleIngredients.map((ing) => (
              <button key={ing.name} onClick={() => setSelected(ing)} className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left">
                <span>{ing.name}</span>
                <span className={`text-xs font-semibold ${ing.safety === 'safe' ? 'text-emerald-700' : ing.safety === 'unsafe' ? 'text-red-700' : 'text-amber-700'}`}>{ing.safety}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {selected && (
        <section className="rounded-3xl border border-slate-300 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900"><InformationCircleIcon className="h-5 w-5" /><h4 className="font-semibold">{selected.name}</h4></div>
          <p className="mt-2 text-sm text-slate-700">{selected.why}</p>
          <p className="mt-1 text-xs text-slate-500">Source: {selected.source}</p>
          <p className="text-xs text-slate-500">Confidence: {Math.round(selected.confidence * 100)}%</p>
        </section>
      )}
    </main>
  );
}
