<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Tour from '$src/components/Tour.svelte';
	import TourMapButton from '$src/components/TourMapButton.svelte';
	import { fly } from 'svelte/transition';

	let wWidth = window.innerWidth;
	let zoomIn = wWidth >= 1024 ? 120 : wWidth >= 768 ? 100 : wWidth >= 600 ? 80 : 60;
	//
	let tm: any;
	const windowResize = () => {
		clearTimeout(tm);
		wWidth = 0;
		//
		tm = setTimeout(() => {
			wWidth = window.innerWidth;
			zoomIn = wWidth >= 1024 ? 120 : wWidth >= 768 ? 100 : wWidth >= 600 ? 80 : 60;
		}, 300);
	};

	const images: (string | null)[] = $page.data.images;
	let tourConfig = () => {
		return {
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
					type: 'equirectangular',
					panorama: images[2],
					hotSpots: [
						{
							type: 'scene',
							text: '3zoom',
							sceneId: '3zoom',
							targetYaw: -4,
							yaw: -4.25,
							pitch: -12
						},
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
				'3zoom': {
					title: '3zoom',
					yaw: 0,
					pitch: 0,
					hfov: 100,
					type: 'equirectangular',
					panorama: images[3],
					hotSpots: [
						{
							type: 'scene',
							text: '3',
							sceneId: '3',
							targetYaw: -180,
							yaw: -185,
							pitch: -30
						}
					]
				},
				4: {
					title: '4',
					yaw: 0,
					pitch: 0,
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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
					hfov: zoomIn,
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

<svelte:window on:resize={windowResize} />

<section>
	<h1 class="text-3xl font-bold mb-2 text-center">Touring Online</h1>
	<div class="text-center">
		<div>
			<span> Image resolution: </span>
			<select on:change={imageResChanged}>
				<option value="very-low">Very low (1.2MB)</option>
				<option value="low" selected>Low (3.2MB)</option>
				<option value="medium">Medium (5.7MB)</option>
				<option value="high">High (9.1MB)</option>
			</select>
		</div>
	</div>
	{#if wWidth}
		<Tour config={tourConfig()} map>
			<svelte:fragment slot="map-area" let:setScene let:currentScene>
				<div
					class="relative z-20 w-[500px] max-w-full h-auto"
					transition:fly|local={{ y: 8, x: 8, duration: 200 }}
				>
					<TourMapButton
						classPos="bottom-[11%] right-[46.27%]"
						activeScene={currentScene == '1'}
						on:click={() => setScene(1)}
					>
						1
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[26%] right-[46.27%]"
						activeScene={currentScene == '2'}
						on:click={() => setScene(2)}
					>
						2
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[34%] right-[47.27%]"
						activeScene={currentScene == '3'}
						on:click={() => setScene(3)}
					>
						3
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[38%] right-[47.27%]"
						activeScene={currentScene == 'A'}
						on:click={() => setScene('3zoom')}
					>
						A
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[36%] right-[36.27%]"
						activeScene={currentScene == '4'}
						on:click={() => setScene(4)}
					>
						4
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[36%] right-[27.27%]"
						activeScene={currentScene == '5'}
						on:click={() => setScene(5)}
					>
						5
					</TourMapButton>
					<TourMapButton
						classPos="top-[40%] right-[27.27%]"
						activeScene={currentScene == '6'}
						on:click={() => setScene(6)}
					>
						6
					</TourMapButton>
					<TourMapButton
						classPos="top-[40%] right-[48%]"
						activeScene={currentScene == '7'}
						on:click={() => setScene(7)}
					>
						7
					</TourMapButton>
					<TourMapButton
						classPos="top-[15.15%] right-[27.27%]"
						activeScene={currentScene == '8'}
						on:click={() => setScene(8)}
					>
						8
					</TourMapButton>
					<TourMapButton
						classPos="top-[15.15%] right-[39.27%]"
						activeScene={currentScene == '9'}
						on:click={() => setScene(9)}
					>
						9
					</TourMapButton>
					<TourMapButton
						classPos="top-[15.15%] left-[39.27%]"
						activeScene={currentScene == '10'}
						on:click={() => setScene(10)}
					>
						10
					</TourMapButton>
					<TourMapButton
						classPos="top-[15.15%] left-[27.27%]"
						activeScene={currentScene == '11'}
						on:click={() => setScene(11)}
					>
						11
					</TourMapButton>
					<TourMapButton
						classPos="top-[39%] left-[27.27%]"
						activeScene={currentScene == '12'}
						on:click={() => setScene(12)}
					>
						12
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[36%] left-[27.27%]"
						activeScene={currentScene == '13'}
						on:click={() => setScene(13)}
					>
						13
					</TourMapButton>
					<TourMapButton
						classPos="bottom-[36%] left-[37.27%]"
						activeScene={currentScene == '14'}
						on:click={() => setScene(14)}
					>
						14
					</TourMapButton>
					<img src="/denah.jpeg" alt="Denah" class="w-full h-auto rounded shadow-lg" />
				</div>
			</svelte:fragment>
		</Tour>
	{/if}
</section>
