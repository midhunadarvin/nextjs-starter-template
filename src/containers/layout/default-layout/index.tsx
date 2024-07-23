'use client';

import { useCheckChrome } from '@/hooks/useCheckChrome';

export default function DefaultLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useCheckChrome();
  return <main className={className}>{children}</main>;
}
