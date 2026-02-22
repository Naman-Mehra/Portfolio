'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search products (e.g. Butter)"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button aria-label="Search products" onClick={onSearch} className="flex items-center justify-center px-3">
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </Button>
    </div>
  );
}
