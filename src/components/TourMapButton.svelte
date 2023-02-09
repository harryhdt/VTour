<script lang="ts">
	export let activeScene = false;
	export let classPos: string;
</script>

<button
	on:click
	class="rounded-full w-3.5 h-3.5 sm:w-5 sm:h-5 {activeScene
		? 'bg-yellow-400 text-neutral-800'
		: 'bg-white text-neutral-600'} absolute flex items-center justify-center {classPos}"
>
	<span class="text-[8px] sm:text-xs font-semibold font-sans">
		<slot />
	</span>
</button>
