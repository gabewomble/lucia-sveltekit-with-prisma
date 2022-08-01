import type { User } from '@prisma/client';
import type { SvelteKitSession } from 'lucia-sveltekit/types';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Locals {}
		// interface Platform {}
		// interface PrivateEnv {}
		// interface PublicEnv {}
		interface Session {
			lucia: SvelteKitSession<Omit<User, 'id' | 'identifier_token' | 'hashed_password'>> | null;
		}
	}
}
