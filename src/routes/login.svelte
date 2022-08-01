<script lang="ts" context="module">
  export const load: import('./__types/login').Load = async ({ session }) => {
    if (session.lucia) {
      return {
        status: 302,
        redirect: '/'
      };
    }
  };
</script>

<script lang="ts">
  async function login(event: SubmitEvent) {
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') ?? '';
    const password = formData.get('password') ?? '';

    await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });

    window.location.href = '/';
  }
</script>

<form on:submit|preventDefault={login}>
  <input name="email" type="email" placeholder="Email" />
  <input name="password" type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>

<a href="/sign-up">Sign up instead</a>
