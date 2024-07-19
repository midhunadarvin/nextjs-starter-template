'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { useModal } from '@/hooks/useModal';

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();

  const { closeModal } = useModal();

  return (
    <>
      {modal && (
        <dialog className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur'>
          <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
            {/* <!-- Modal header --> */}
            <div className='flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{title}</h3>
              <Link href={pathname}>
                <button
                  type='button'
                  className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-toggle='crud-modal'
                  onClick={() => {
                    closeModal();
                    if (onClose) {
                      onClose();
                    }
                  }}
                >
                  <svg
                    className='h-3 w-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </Link>
            </div>
            <div className='flex flex-col items-center'>{children}</div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
