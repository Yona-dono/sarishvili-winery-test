import type { ReactNode } from 'react';

// Minimal root layout — locale-specific layout handles fonts, lang attr, etc.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
