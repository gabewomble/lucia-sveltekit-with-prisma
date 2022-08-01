import { prisma } from './prisma';
import { dev } from '$app/env';
import adapter from '@lucia-sveltekit/adapter-prisma';
import lucia from 'lucia-sveltekit';
import type { User } from '@prisma/client';

export const auth = lucia<Omit<User, 'id' | 'identifier_token' | 'hashed_password'>>({
  adapter: adapter(prisma),
  secret: 'asdflkjzxcoiqw230492309',
  env: dev ? 'DEV' : 'PROD'
});
