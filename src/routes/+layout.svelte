<script>
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import '$src/app.css';
</script>

{#if $navigating}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-[9999] bg-white bg-opacity-20 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent md:cursor-wait"
	/>
{/if}
<div id="app" class="min-h-screen flex flex-col p-4 md:p-6 font-lato">
	<main>
		<slot />
	</main>
	<footer class="text-center mt-auto">
		<span class="text-sm">
			&copy; {new Date().getFullYear()}
		</span>
	</footer>
</div>
