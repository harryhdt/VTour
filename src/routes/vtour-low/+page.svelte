<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Tour from '$src/components/tour.svelte';

	const images: (string | null)[] = $page.data.images;
	const tourConfig = {
		default: {
			firstScene: 'circle',
			sceneFadeDuration: 300
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
						pitch: 0,
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
						pitch: -6,
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
	const imageResChanged = async (e: any) => {
		const value = e.target.value;
		if (value !== 'low') {
			await goto('/vtour-' + value);
		}
	};
</script>

<svelte:head>
	<title>Touring Online</title>
	<meta name="description" content="Just simple virtual tour" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold mb-2 text-center">Touring Online</h1>
	<div class="text-center">
		<div>
			<span> Image resolution: </span>
			<select on:change={imageResChanged}>
				<option value="low" selected>Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
		</div>
	</div>
	<Tour config={tourConfig} />
</section>
