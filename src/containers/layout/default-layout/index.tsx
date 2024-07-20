'use client';

import { useCheckChrome } from '@/hooks/useCheckChrome';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useCheckChrome();
  return <>{children}</>;
}
