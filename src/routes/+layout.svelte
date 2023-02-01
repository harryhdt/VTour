<script>
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import '$src/app.css';
</script>

{#if $navigating}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-[9999] bg-white bg-opacity-20 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent md:cursor-wait"
	>
		<div class="flex items-center h-full justify-center md:hidden">
			<svg
				class="animate-spin h-8 w-8 text-gray-700"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>
	</div>
{/if}
<div id="app" class="fixed inset-0 z-10 flex flex-col p-4 md:p-6 font-lato overflow-auto">
	<main class="mb-4">
		<slot />
	</main>
	<footer class="text-center mt-auto">
		<span class="text-sm">
			&copy; {new Date().getFullYear()}
		</span>
	</footer>
</div>
