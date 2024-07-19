import { useState } from 'react';

interface CheckBoxProps {
  label: string;
  onChange: (selected: boolean) => void;
}

export function CheckBox({ label, onChange }: CheckBoxProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div className='flex items-center'>
      <input
        checked={selected}
        onClick={() => {
          setSelected(!selected);
          onChange(!selected);
        }}
        id='checked-checkbox'
        type='checkbox'
        value=''
        className='text-secondary focus:ring-secondary dark:focus:ring-secondary h-6 w-6 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
      />
      <label
        htmlFor='checked-checkbox'
        className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
    </div>
  );
}
