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
	images[0] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/1.jpg');
	images[1] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/2.jpg');
	images[2] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/3.jpg');
	images[3] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/4.jpg');
	images[4] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/5.jpg');
	images[5] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/6.jpg');
	images[6] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/7.jpg');
	images[7] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/8.jpg');
	images[8] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/9.jpg');
	images[9] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/10.jpg');
	images[10] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/11.jpg');
	images[11] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/12.jpg');
	images[12] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/13.jpg');
	images[13] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/14.jpg');
	images[14] = await fetchImage('https://ik.imagekit.io/xdjz6hr2u/tr:q-50/15.jpg');
	return { images };
}) satisfies PageLoad;
