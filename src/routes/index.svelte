<script lang="ts" context="module">
	export const load: import('./__types/index').Load = async ({ session, fetch }) => {
		if (!session.lucia) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		const response = await fetch('/api/check-auth');

		return {
			status: response.status,
			props: {
				data: (await response.json()).data
			}
		};
	};
</script>

<script lang="ts">
	import { signOut } from 'lucia-sveltekit/client';
	export let data: any;

	async function onSignOut() {
		await signOut();
		window.location.href = '/login';
	}
</script>

<pre>
  {JSON.stringify(data)}
</pre>

<button on:click={onSignOut}>Sign out</button>
