<script lang="ts">
	import { audios } from '$lib/audio-sources';
	import PadComponent from '$lib/components/PadComponent.svelte';
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
	{#each audios as pad}
		<PadComponent {pad} />
	{/each}
</div>
