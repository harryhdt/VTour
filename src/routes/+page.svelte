<svelte:head>
	<title>Virtual Tour</title>
	<meta name="description" content="Just simple virtual tour" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold mb-2 text-center">Virtual Tour</h1>
	<div class="text-center mb-1">
		<span class="text-gray-600"
			>You can choose what you prefer for the tour based on the image resolution and size</span
		>
	</div>
	<div class="flex items-center justify-center space-x-4">
		<a href="/vtour-medium" class="text-blue-700 hover:text-gray-700">Low 3.2MB</a>
		<span class="text-gray-300">|</span>
		<a href="/vtour-medium" class="text-blue-700 hover:text-gray-700">Medium 5.7MB</a>
		<span class="text-gray-300">|</span>
		<a href="/vtour-medium" class="text-blue-700 hover:text-gray-700">High 9.1MB</a>
	</div>
</section>
