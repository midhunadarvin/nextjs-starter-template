'use server';
import { promises as fs } from 'fs';

import { User, UserSchema } from '@/types/User';

export async function getUsers() {
  const file = await fs.readFile(process.cwd() + '/public/data/users.json', 'utf8');
  const resp = JSON.parse(JSON.stringify(file));

  return resp;
}

export async function createUser(user: User) {
  const validatedFields = UserSchema.safeParse(user);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const file = await fs.readFile(process.cwd() + '/public/data/users.json', 'utf8');
  const users: User[] = JSON.parse(file);
  const data = [...users];
  data.push(user);
  // Write File, async:
  await fs.writeFile(process.cwd() + '/public/data/users.json', JSON.stringify(data), {
    // flag: 'a' // 'a' flag for append
  });

  return {
    message: 'success',
  };
}
