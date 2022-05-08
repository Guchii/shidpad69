<script lang="ts">
	import Footer from '$lib/components/FooterComponent.svelte';
	import Header from '$lib/components/HeaderComponent.svelte';
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen bg-raisin-black">
	<Header />
	<main class="flex-1">
		<div class="mx-auto max-w-[1200px]">
			<slot />
		</div>
	</main>
	<Footer />
</div>
