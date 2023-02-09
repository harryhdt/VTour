<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Tour from '$src/components/tour.svelte';

	const images: (string | null)[] = $page.data.images;
	const tourConfig = {
		default: {
			firstScene: '1',
			sceneFadeDuration: 300
		},
		autoLoad: true,
		scenes: {
			1: {
				title: '1',
				yaw: -60,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[0],
				autoRotate: -3,
				hotSpots: [
					{
						type: 'scene',
						text: '2',
						sceneId: '2',
						targetYaw: 0,
						yaw: -15,
						pitch: -10
					}
				]
			},
			2: {
				title: '2',
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[1],
				hotSpots: [
					{
						type: 'scene',
						text: '1',
						sceneId: '1',
						targetYaw: -200,
						yaw: 180,
						pitch: 0
					},
					{
						type: 'scene',
						text: '4',
						sceneId: '4',
						targetYaw: -80,
						yaw: 40,
						pitch: -7
					},
					{
						type: 'scene',
						text: '14',
						sceneId: '14',
						targetYaw: 80,
						yaw: -50,
						pitch: -6
					},
					{
						type: 'scene',
						text: '3',
						sceneId: '3',
						targetYaw: -3,
						yaw: -8,
						pitch: -6
					}
				]
			},
			3: {
				title: '3',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[2],
				hotSpots: [
					{
						type: 'scene',
						text: '4',
						sceneId: '4',
						targetYaw: 0,
						yaw: 85,
						pitch: -6
					},
					{
						type: 'scene',
						text: '14',
						sceneId: '14',
						targetYaw: 10,
						yaw: -95,
						pitch: -6
					},
					{
						type: 'scene',
						text: '2',
						sceneId: '2',
						targetYaw: 180,
						yaw: 188,
						pitch: -10
					}
				]
			},
			4: {
				title: '4',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[4],
				hotSpots: [
					{
						type: 'scene',
						text: '5',
						sceneId: '5',
						targetYaw: 135,
						yaw: 10,
						pitch: -7
					},
					{
						type: 'scene',
						text: '2',
						sceneId: '2',
						targetYaw: -160,
						yaw: 115,
						pitch: -6
					},
					{
						type: 'scene',
						text: '3',
						sceneId: '3',
						targetYaw: -90,
						yaw: 180,
						pitch: -2
					}
				]
			},
			5: {
				title: '1',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[5],
				hotSpots: [
					{
						type: 'scene',
						text: '6',
						sceneId: '6',
						targetYaw: 90,
						yaw: 43,
						pitch: -3
					},
					{
						type: 'scene',
						text: '4',
						sceneId: '4',
						targetYaw: 180,
						yaw: -60,
						pitch: -10
					}
				]
			},
			6: {
				title: '6',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[6],
				hotSpots: [
					{
						type: 'scene',
						text: '7',
						sceneId: '7',
						targetYaw: 0,
						yaw: -24,
						pitch: -8
					},
					{
						type: 'scene',
						text: '8',
						sceneId: '8',
						targetYaw: 90,
						yaw: 92,
						pitch: -3
					},
					{
						type: 'scene',
						text: '5',
						sceneId: '5',
						targetYaw: -120,
						yaw: -90,
						pitch: -2
					}
				]
			},
			7: {
				title: '7',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[7],
				hotSpots: [
					{
						type: 'scene',
						text: '6',
						sceneId: '6',
						targetYaw: 180,
						yaw: 94,
						pitch: -2
					},
					{
						type: 'scene',
						text: '12',
						sceneId: '12',
						targetYaw: 180,
						yaw: -94,
						pitch: -2
					}
				]
			},
			8: {
				title: '8',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[8],
				hotSpots: [
					{
						type: 'scene',
						text: '9',
						sceneId: '9',
						targetYaw: 90,
						yaw: -4,
						pitch: -5
					},
					{
						type: 'scene',
						text: '6',
						sceneId: '6',
						targetYaw: -90,
						yaw: -94,
						pitch: -2
					}
				]
			},
			9: {
				title: '9',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[9],
				hotSpots: [
					{
						type: 'scene',
						text: '10',
						sceneId: '10',
						targetYaw: 90,
						yaw: 90,
						pitch: -4
					},
					{
						type: 'scene',
						text: '8',
						sceneId: '8',
						targetYaw: -180,
						yaw: -90,
						pitch: -4
					}
				]
			},
			10: {
				title: '10',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[10],
				hotSpots: [
					{
						type: 'scene',
						text: '11',
						sceneId: '11',
						targetYaw: 90,
						yaw: 90,
						pitch: -4
					},
					{
						type: 'scene',
						text: '9',
						sceneId: '9',
						targetYaw: -90,
						yaw: -90,
						pitch: -4
					}
				]
			},
			11: {
				title: '11',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[11],
				hotSpots: [
					{
						type: 'scene',
						text: '12',
						sceneId: '12',
						targetYaw: 90,
						yaw: 9,
						pitch: -3
					},
					{
						type: 'scene',
						text: '10',
						sceneId: '10',
						targetYaw: -90,
						yaw: -90,
						pitch: -4
					}
				]
			},
			12: {
				title: '12',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[12],
				hotSpots: [
					{
						type: 'scene',
						text: '13',
						sceneId: '13',
						targetYaw: 120,
						yaw: 90,
						pitch: -4
					},
					{
						type: 'scene',
						text: '7',
						sceneId: '7',
						targetYaw: 0,
						yaw: 16,
						pitch: -7
					},
					{
						type: 'scene',
						text: '11',
						sceneId: '11',
						targetYaw: -180,
						yaw: -90,
						pitch: -2
					}
				]
			},
			13: {
				title: '13',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[13],
				hotSpots: [
					{
						type: 'scene',
						text: '14',
						sceneId: '14',
						targetYaw: -180,
						yaw: 45,
						pitch: -5
					},
					{
						type: 'scene',
						text: '12',
						sceneId: '12',
						targetYaw: -90,
						yaw: -48,
						pitch: -4
					}
				]
			},
			14: {
				title: '14',
				yaw: 0,
				pitch: 0,
				hfov: 120,
				type: 'equirectangular',
				panorama: images[14],
				hotSpots: [
					{
						type: 'scene',
						text: '3',
						sceneId: '3',
						targetYaw: 90,
						yaw: 180,
						pitch: -8
					},
					{
						type: 'scene',
						text: '2',
						sceneId: '2',
						targetYaw: -205,
						yaw: -110,
						pitch: -6
					},
					{
						type: 'scene',
						text: '13',
						sceneId: '13',
						targetYaw: -140,
						yaw: 10,
						pitch: -4
					}
				]
			}
		}
	};
	//
	const imageResChanged = async (e: any) => {
		const value = e.target.value;
		if (value !== 'high') {
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
				<option value="very-low">Very low (1.2MB)</option>
				<option value="low">Low (3.2MB)</option>
				<option value="medium">Medium (5.7MB)</option>
				<option value="high" selected>High (9.1MB)</option>
			</select>
		</div>
	</div>
	<Tour config={tourConfig} />
</section>
