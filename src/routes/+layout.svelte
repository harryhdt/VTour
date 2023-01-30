<script>
	import '$src/app.css';
</script>

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
