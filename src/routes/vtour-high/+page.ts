import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const fetchImage = async (src: string) => {
		return await fetch(src)
			.then(async (response) => {
				const blob = await response.blob();
				return URL.createObjectURL(blob);
			})
			.catch((error) => {
				console.warn(error);
				return null;
			});
	};
	const images: (string | null)[] = [];
	images[0] = await fetchImage('https://pannellum.org/images/from-tree.jpg');
	images[1] = await fetchImage('https://pannellum.org/images/bma-0.jpg');
	return { images };
}) satisfies PageLoad;
