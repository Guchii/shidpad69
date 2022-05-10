<script lang="ts" context="module">
	export async function load({ fetch }) {
		const resp = await (await fetch('/api/audios')).json();
		return { props: { audios: resp.audios } };
	}
</script>

<script lang="ts">
	import type { TPad } from '$lib/app-types';
	import PadComponent from '$lib/components/PadComponent.svelte';

	export let audios: TPad[];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
	{#each audios as pad}
		<PadComponent {pad} />
	{/each}
</div>
