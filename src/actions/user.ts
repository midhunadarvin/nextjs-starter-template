'use server';
import bcrypt from 'bcrypt';
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

  const newUser = {
    ...user,
    password: await bcrypt.hash(user.password, 10), // hash the password
  };

  const file = await fs.readFile(process.cwd() + '/public/data/users.json', 'utf8');
  const users: User[] = JSON.parse(file);
  const data = [...users];
  data.push(newUser);

  await fs.writeFile(process.cwd() + '/public/data/users.json', JSON.stringify(data), {
    // flag: 'a' // 'a' flag for append
  });

  return {
    message: 'success',
  };
}

export async function editUser(user: User) {
  const validatedFields = UserSchema.safeParse(user);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const newUser = {
    ...user,
    password: await bcrypt.hash(user.password, 10), // hash the password
  };

  const file = await fs.readFile(process.cwd() + '/public/data/users.json', 'utf8');
  const users: User[] = JSON.parse(file);
  const data = [...users];
  const foundIndex = data.findIndex((u) => u.email == newUser.email);
  if (foundIndex > -1) data[foundIndex] = newUser;

  await fs.writeFile(process.cwd() + '/public/data/users.json', JSON.stringify(data), {
    // flag: 'a' // 'a' flag for append
  });

  return {
    message: 'success',
  };
}

export async function deleteUsers(users: User[]) {
  const file = await fs.readFile(process.cwd() + '/public/data/users.json', 'utf8');
  const currentUsers: User[] = JSON.parse(file);
  const data = [...currentUsers];

  for (const user of users) {
    const validatedFields = UserSchema.safeParse(user);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const foundIndex = data.findIndex((u) => u.email == user.email);
    if (foundIndex > -1) {
      data.splice(foundIndex, 1);
    }
  }

  await fs.writeFile(process.cwd() + '/public/data/users.json', JSON.stringify(data), {
    // flag: 'a' // 'a' flag for append
  });

  return {
    message: 'success',
  };
}
