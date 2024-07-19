import { ReactElement } from 'react';

interface TextInputWithPrefixProps {
  name: string;
  placeholder: string;
  label: string;
  icon: ReactElement;
  tooltip?: string;
}
export function TextInputWithPrefix(props: TextInputWithPrefixProps) {
  return (
    <label className='relative flex flex-1 flex-col'>
      <span className='mb-3 flex items-center gap-3 font-bold'>
        {props.label}
        {props.tooltip ? (
          <span className='group relative'>
            <span className='absolute -right-2 top-1/2 hidden w-max -translate-y-1/2 translate-x-full transform items-center justify-center bg-black px-2 py-1 text-xs text-white group-hover:flex'>
              {' '}
              Hey ceci est une infobulle !
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </span>
        ) : null}
      </span>
      <input
        className='border-gray-5 peer rounded border py-2 pl-12 pr-2 text-gray-700 placeholder-gray-400'
        type='text'
        name={props.name}
        placeholder={props.placeholder}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='absolute bottom-0 left-0 -mb-0.5 h-6 w-6 -translate-y-1/2 translate-x-1/2 transform text-black peer-placeholder-shown:text-gray-300'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        />
      </svg>
    </label>
  );
}
