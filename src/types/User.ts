import { z } from 'zod';

export const UserSchema = z.object({
  first_name: z.string({
    invalid_type_error: 'Invalid First Name',
    required_error: 'First name is required',
  }),
  last_name: z.string({
    invalid_type_error: 'Invalid Last Name',
    required_error: 'Last name is required',
  }),
  age: z.number({
    invalid_type_error: 'Invalid Age',
    required_error: 'Age is required',
  }),
  email: z.string({
    invalid_type_error: 'Invalid Email',
    required_error: 'Email is required',
  }),
  alternate_email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

// extract the inferred type
export type User = z.infer<typeof UserSchema>;
