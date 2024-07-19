import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  required: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
}
export function TextInput({
  id,
  register,
  errors,
  label,
  required = false,
  ...props
}: TextInputProps) {
  return (
    <>
      <label className='mb-2 inline-block text-sm'>{label}</label>
      <input
        type='text'
        id={id}
        {...register(id, {
          required: required ? `${label} is required` : '',
          valueAsNumber: props.type == 'number',
        })}
        className='border-gray-5 w-full flex-1 appearance-none rounded border bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
        placeholder={label}
        {...props}
      />
      <ErrorMessage
        name={id}
        errors={errors}
        render={({ message }) => <p className='pt-1 text-red-500'>{message}</p>}
      />
    </>
  );
}
