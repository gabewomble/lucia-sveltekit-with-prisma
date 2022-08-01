# lucia-sveltekit-prisma

This repository is an example for setting up `lucia-sveltekit` with `prisma`, using `planetscale` as it's database host.

Currently, requests which are validated with `auth.validateRequest(request)` error with `AUTH_INVALID_ACCESS_TOKEN`.

## Repro

1. Setup a planetscale database and copy the Prisma connection instructions to a `.env` file.
2. `npm i && npx prisma db push && npx prisma generate`
3. `npm run dev`
4. Create an account
5. Home route `/` should return User data after authenticated, instead returns `AUTH_INVALID_ACCESS_TOKEN` error.

### About

This is a minimal setup following the email & password directions from lucia-sveltekit's [Email and Password guide](https://lucia-sveltekit.vercel.app/guides/email-and-password) + lucia-sveltekit's [Prisma Adapter guide](https://lucia-sveltekit.vercel.app/adapters/prisma). I first encountered this issue in another project with more complexity, and wanted to see if I could reproduce it in a minimal environment.

The project has 3 pages, and 3 api routes. The API routes are the following:

- `/api/sign-up`: Handles user sign up

- `/api/login`: Handles user login

- `/api/check-auth`: Simple endpoint which will call `auth.validateRequest(request)` and either return `validateRequest`'s return value or an error message.

The pages are as follows:

- `/sign-up`: Allows user to sign up, redirects to `/` on success

- `/login`: Allows user to login, redirects to `/` on success

- `/`: Calls the `/api/check-auth` endpoint and renders the response data
