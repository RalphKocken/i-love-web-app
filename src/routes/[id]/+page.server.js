import { error } from '@sveltejs/kit';
import posts from '$lib/data/articleData.json';

export function load({ params }) {
	const post = posts.find((post) => post.id === params.id);

	if (!post) throw error(404);

	return {
		post
	};
}
