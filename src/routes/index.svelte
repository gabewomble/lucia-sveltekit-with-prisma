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
	export let data: any;
</script>

<pre>
  {JSON.stringify(data)}
</pre>
