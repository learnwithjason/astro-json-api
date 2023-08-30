import type { APIRoute } from 'astro';
import data from '../../data/greetings.json';

export const GET: APIRoute = () => {
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
