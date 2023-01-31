<script lang="ts">
	import { page } from '$app/stores';
	import Tour from '$src/components/tour.svelte';

	const images: (string | null)[] = $page.data.images;
	const tourConfig = {
		default: {
			firstScene: 'circle',
			sceneFadeDuration: 500
		},
		autoLoad: true,
		scenes: {
			circle: {
				title: 'Mason Circle',
				yaw: 130,
				type: 'equirectangular',
				panorama: images[0],
				hotSpots: [
					{
						pitch: -2.1,
						yaw: 132.9,
						type: 'scene',
						text: 'Spring House or Dairy',
						sceneId: 'house',
						targetYaw: 214
					}
				]
			},
			house: {
				title: 'Spring House or Dairy',
				type: 'equirectangular',
				yaw: 214,
				panorama: images[1],
				hotSpots: [
					{
						pitch: -0.6,
						yaw: 37.1,
						type: 'scene',
						text: 'Mason Circle',
						sceneId: 'circle',
						targetYaw: 0
					}
				]
			}
		}
	};
	//
</script>

<svelte:head>
	<title>Touring Online</title>
	<meta name="description" content="Just simple virtual tour" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold mb-2 text-center">Touring Online</h1>
	<div class="text-center">
		<span>Image resolution: Medium</span>
	</div>
	<Tour config={tourConfig} />
</section>
