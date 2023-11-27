import posts from '$lib/data/articleData.json';

export function load() {
	return {
		summaries: posts.map((post) => ({
			id: post.id,
			title: post.title,
            image: post.image,
            description: post.description
		}))
	};
}