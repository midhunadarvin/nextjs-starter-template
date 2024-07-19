/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChangeEvent } from 'react';

export function Select({
  data,
  label,
  nameKey,
  valueKey,
  defaultValue,
  onChange,
}: {
  data: any[];
  label?: string;
  nameKey: string;
  valueKey: string;
  defaultValue: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      {label && (
        <label className='min-w-36 max-w-[200px] text-sm text-gray-500 dark:text-neutral-500'>
          {label}
        </label>
      )}

      <select
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        defaultValue={defaultValue}
        className='ring-offset-background placeholder:text-muted-foreground flex h-10 w-full flex-1 appearance-none items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
      >
        {data?.map((option) => (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[nameKey]}
          </option>
        ))}
      </select>
    </>
  );
}
