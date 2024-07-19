'use client';

import { useCheckChrome } from '@/hooks/useCheckChrome';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useCheckChrome();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>{children}</main>
  );
}
