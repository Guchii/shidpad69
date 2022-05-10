<script lang="ts">
	import { Howl } from 'howler';
	import { currentlyPlayingAudio } from '$lib/stores/audio';
	import type { TPad } from '../app-types';

	export let pad: TPad;

	const sound = new Howl({
		src: [pad.loc],
		volume: 1
	});

	let isPlaying = false;
	$: isPlaying = $currentlyPlayingAudio.includes(pad.id);
</script>

<button
	on:click={() => {
		if (pad.oneShot) sound.play();
		else if (!isPlaying) {
			$currentlyPlayingAudio = [...$currentlyPlayingAudio, pad.id];
			sound.play();
			sound.on('end', () => {
				$currentlyPlayingAudio = $currentlyPlayingAudio.filter((i) => i !== pad.id);
			});
		}
	}}
	class="transition-all h-48 bg-gradient-to-r from-rose-madder to-yellow-orange  text-white font-black rounded-md active:shadow-xl active:translate-y-1 active:scale-95 hover:shadow-xl hover:z-10 shadow-red-500 grid place-items-center uppercase cursor-pointer"
	disabled={isPlaying}
	audio-source={pad.loc}
>
	{pad.name}
</button>
