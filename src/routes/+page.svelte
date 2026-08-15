<script lang="ts">
	import type { TPad } from '$lib/app-types';
	import PadComponent from '$lib/components/PadComponent.svelte';
	import { audioSources } from '$lib/stores/audio';
	import type { PageData } from './$types';
	import { Howl } from 'howler';

	export let data: PageData;

	const { audios, color } = data;

	$audioSources = audios.map((a: TPad) => ({
		audioRef: new Howl({ src: a.loc }),
		oneShot: a.oneShot,
		howlerIds: []
	}));
</script>

<div class="p-2 space-y-4">
	<div class="flex justify-end gap-4">
		<p class="font-cursive">Earrape Mode</p>
		<label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
			<input type="checkbox" class="sr-only peer" id="default-toggle" />
			<div
				class="w-12 h-7 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#2F979D] after:rounded-full after:h-5 after:w-5 after:transition-all  border-2 border-black"
			/>
		</label>
	</div>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each audios as pad, index}
			<PadComponent pad={{ ...pad, color }} audioIndex={index} />
		{/each}
	</div>
</div>
