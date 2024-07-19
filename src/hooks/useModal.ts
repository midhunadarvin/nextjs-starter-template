'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export function useModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();
  const router = useRouter();

  const closeModal = () => {
    router.replace(pathname);
  };

  const openModal = () => {
    if (!modal) router.replace(pathname + '?modal=true');
  };

  return { closeModal, openModal };
}
