'use client';

import { useState } from 'react';
import { DietaryToggles } from '@/components/DietaryToggles';

export default function ProfilePage() {
  const [profile, setProfile] = useState({ noEgg: true, noGelatin: true, noRennet: true });

  return (
    <main className="mx-auto min-h-screen w-full max-w-md p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-2 text-slate-700">Configure dietary settings in a single screen.</p>
      <div className="mt-4">
        <DietaryToggles profile={profile} onChange={setProfile} />
      </div>
    </main>
  );
}
