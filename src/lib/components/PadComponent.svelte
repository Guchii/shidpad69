<script lang="ts">
	import { currentlyPlayingAudio } from '$lib/stores/audio';
	import { Howl } from 'howler';
	import type { TPad } from '../app-types';

	export let pad: TPad;

	const sound = new Howl({ src: [pad.loc], volume: 1 });

	let isPlaying = false;
	$: isPlaying = $currentlyPlayingAudio.includes(pad.id);
</script>

<button
	on:click={() => {
		if (pad.oneShot) sound.play();
		else if (!isPlaying) {
			$currentlyPlayingAudio = [...$currentlyPlayingAudio, pad.id];
			sound.play();
			sound.on(
				'end',
				() => ($currentlyPlayingAudio = $currentlyPlayingAudio.filter((i) => i !== pad.id))
			);
		}
	}}
	style:background-color={pad.color}
	class={`transition-all h-48 font-black rounded-md grid place-items-center uppercase cursor-pointer border-[3.5px] border-black text-lg ${
		isPlaying ? 'cursor-default' : 'active:translate-y-1 active:scale-95'
	}`}
	disabled={isPlaying}
	audio-source={pad.loc}
>
	{pad.name}
</button>
