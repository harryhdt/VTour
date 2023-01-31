<svelte:head>
	<title>Virtual Tour</title>
	<meta name="description" content="Just simple virtual tour" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold mb-2 text-center">Virtual Tour</h1>
	<div class="flex items-center flex-col space-y-2">
		<a href="/vtour-low" class="text-blue-700 hover:text-gray-700 pointer-events-none opacity-50"
			>Start tour (Low resolution)</a
		>
		<a href="/vtour-medium" class="text-blue-700 hover:text-gray-700"
			>Start tour (Medium resolution)</a
		>
		<a href="/vtour-high" class="text-blue-700 hover:text-gray-700 pointer-events-none opacity-50"
			>Start tour (High resolution)</a
		>
	</div>
</section>
