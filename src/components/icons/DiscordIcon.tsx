import React from 'react';
import { LucideProps } from 'lucide-react';

export function DiscordIcon(props: LucideProps) {
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
      <path d="M8.5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13.5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M15.5 17.5c-1.5.7-2.9 1-4.5 1-1.6 0-3-.3-4.5-1" />
      <path d="M3 7.2C4.4 4.8 7.5 3 12 3c4.5 0 7.6 1.8 9 4.2" />
      <path d="M21 7.3c0 8.9-2.8 11.9-9 11.9-6.2 0-9-3-9-11.9" />
    </svg>
  );
}