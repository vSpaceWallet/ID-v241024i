import React from 'react';
import { LucideProps } from 'lucide-react';

export function GoogleIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      <path d="M16.95 12.907a5.5 5.5 0 1 1-1.414-4.858" />
      <path d="M12 8h7" />
    </svg>
  );
}