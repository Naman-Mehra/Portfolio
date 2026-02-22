import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export type ScanStatus = 'idle' | 'safe' | 'unsafe' | 'warning';

interface ResultCardProps {
  status: ScanStatus;
  detail?: string;
}

const statusCopy = {
  safe: {
    title: 'Safe',
    body: 'This item contains no forbidden ingredients.',
    icon: CheckCircleIcon,
    color: 'text-green-700'
  },
  unsafe: {
    title: 'Unsafe',
    body: 'Disallowed ingredients were detected.',
    icon: XCircleIcon,
    color: 'text-red-700'
  },
  warning: {
    title: 'Warning',
    body: 'Potential cross-contamination risk was found.',
    icon: ExclamationTriangleIcon,
    color: 'text-yellow-700'
  }
};

export function ResultCard({ status, detail }: ResultCardProps) {
  if (status === 'idle') return null;

  const { title, body, icon: Icon, color } = statusCopy[status];

  return (
    <section aria-live="polite" className="w-full rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <Icon className={`h-10 w-10 ${color}`} aria-hidden="true" />
        <div>
          <h2 className={`text-2xl font-bold ${color}`}>{title}</h2>
          <p className="text-sm text-slate-700">{detail ?? body}</p>
        </div>
      </div>
    </section>
  );
}
