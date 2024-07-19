import Link from 'next/link';

export function Sidebar() {
  return (
    <aside
      id='default-sidebar'
      className='fixed right-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0'
      aria-label='Sidebar'
    >
      <div className='h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800'>
        <ul className='space-y-2 font-medium'>
          <li>
            <Link
              href='/dashboard'
              className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            >
              <svg
                className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              <span className='ms-3'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href='/users'
              className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            >
              <svg
                className='h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
              </svg>
              <span className='ms-3 flex-1 whitespace-nowrap'>Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
