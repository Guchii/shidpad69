<script lang="ts">
	import Footer from '$lib/components/FooterComponent.svelte';
	import Header from '$lib/components/HeaderComponent.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import '../app.css';
</script>

<MetaTags
	title="ShidPad69"
	description="Shidpad is a joke project that is supposed to be used for playing popular audio clips. It can be used to annoy someone while they are playing a video game or make a conversation funnier - the posibilities are endless."
/>

<svelte:head>
	<title>ShidPad69</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
		<div class="mx-auto max-w-[1200px]">
			<slot />
		</div>
	</main>
	<Footer />
</div>
