'use client';

import { useState } from 'react';
import { QrCodeIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import { DietaryToggles } from '@/components/DietaryToggles';
import { ResultCard, type ScanStatus } from '@/components/ResultCard';
import { SearchBar } from '@/components/SearchBar';

export function ScannerUI() {
  const [status, setStatus] = useState<ScanStatus>('idle');
  const [detail, setDetail] = useState<string>();
  const [searchQuery, setSearchQuery] = useState('');
  const [profile, setProfile] = useState({ noEgg: true, noGelatin: true, noRennet: true });

  const handleScan = async () => {
    setStatus('warning');
    setDetail('Demo mode: connect barcode scanner to query OpenFoodFacts API route.');
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 p-4">
      <header>
        <h1 className="text-2xl font-bold">Dietary Scanner</h1>
        <p className="text-sm text-slate-600">Scan, search, and evaluate ingredients in one tap.</p>
      </header>

      <section className="flex grow flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-sm">
        <Button
          aria-label="Scan product barcode"
          onClick={handleScan}
          className="h-20 w-20 rounded-full p-0"
        >
          <QrCodeIcon className="h-10 w-10" aria-hidden="true" />
        </Button>
        <p className="mt-3 text-center text-base">Scan a product barcode</p>
      </section>

      <ResultCard status={status} detail={detail} />
      <SearchBar value={searchQuery} onChange={setSearchQuery} onSearch={() => setStatus('safe')} />
      <DietaryToggles profile={profile} onChange={setProfile} />
    </main>
  );
}
