'use client';

import { Switch } from '@/components/ui/switch';

interface Profile {
  noEgg: boolean;
  noGelatin: boolean;
  noRennet: boolean;
}

interface DietaryTogglesProps {
  profile: Profile;
  onChange: (profile: Profile) => void;
}

export function DietaryToggles({ profile, onChange }: DietaryTogglesProps) {
  const update = (key: keyof Profile, value: boolean) => onChange({ ...profile, [key]: value });

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Dietary profile</h2>
      <div className="mt-3 grid gap-3">
        <label className="flex items-center justify-between gap-3">
          <span>No Egg</span>
          <Switch id="noEgg" checked={profile.noEgg} onCheckedChange={(value) => update('noEgg', value)} />
        </label>
        <label className="flex items-center justify-between gap-3">
          <span>No Gelatin</span>
          <Switch id="noGelatin" checked={profile.noGelatin} onCheckedChange={(value) => update('noGelatin', value)} />
        </label>
        <label className="flex items-center justify-between gap-3">
          <span>No Animal Rennet</span>
          <Switch id="noRennet" checked={profile.noRennet} onCheckedChange={(value) => update('noRennet', value)} />
        </label>
      </div>
    </section>
  );
}
