import type { APIRoute } from 'astro';

import data from '../../../data/greetings.json';

export function getStaticPaths() {
	return data.map((item) => {
		return { params: { id: item.id } };
	});
}

export const GET: APIRoute = ({ params }) => {
	const greeting = data.find((item) => item.id === Number(params.id));

	return new Response(JSON.stringify(greeting), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
