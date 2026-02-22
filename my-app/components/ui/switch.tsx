'use client';

interface SwitchProps {
  id: string;
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
}

export function Switch({ id, checked, onCheckedChange }: SwitchProps) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`relative inline-flex h-7 w-12 min-h-11 min-w-11 items-center rounded-full border border-slate-300 p-1 transition ${checked ? 'bg-green-600' : 'bg-slate-300'}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  );
}
