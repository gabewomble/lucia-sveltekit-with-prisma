import type { RequestHandler } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

export const GET: RequestHandler = async ({ request }) => {
  try {
    const user = await auth.validateRequest(request);
    return {
      status: 200,
      body: {
        data: user
      }
    };
  } catch (e) {
    return {
      status: 200,
      body: {
        data: (e as Error).message
      }
    };
  }
};
