import adapter from '@sveltejs/adapter-vercel';

export default {
    kit: {
        adapter: adapter(),
        prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/') {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		},
    }
};
