import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ButtonOptionGroupProps {
  options: Array<{ icon: LucideIcon; name: string; id: string }>;
  onChange?: (selected: string) => void;
}
export function ButtonOptionGroup(props: ButtonOptionGroupProps) {
  const [selected, setSelected] = useState(props.options[0].id);
  return (
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
      {props.options.map((item, idx) => (
        <div
          key={idx}
          className={`flex w-full cursor-pointer items-center justify-center rounded border px-5 py-4 ${
            selected == item.id ? 'text-secondary' : ''
          } `}
          onClick={() => {
            setSelected(item.id);
            if (props.onChange) props.onChange(item.id);
          }}
        >
          <item.icon />
          <span className='ml-2'>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
