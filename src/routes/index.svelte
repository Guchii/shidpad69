<script lang="ts" context="module">
	/** @type {import('./index').Load} */
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

<div class="p-2 space-y-4">
	<div class="flex justify-end gap-4">
		<p class="font-cursive">Earrape Mode</p>
		<label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
			<input type="checkbox" id="default-toggle" class="sr-only peer" />
			<div
				class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-500"
			/>
		</label>
	</div>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each audios as pad}
			<PadComponent {pad} />
		{/each}
	</div>
</div>
