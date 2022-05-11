<script lang="ts">
	import { audioSources } from '$lib/stores/audio';
	import type { TPad } from '../app-types';

	export let pad: TPad;
	export let audioIndex: number;

	const sound = $audioSources[audioIndex];
	const audioRef = sound.audioRef;
	let disabled = false;
	$: disabled = !sound.oneShot && sound.howlerIds.length > 0;
</script>

<button
	on:click={() => {
		const id = audioRef.play();
		sound.howlerIds = [...sound.howlerIds, id];
		audioRef.on('end', () => (sound.howlerIds = sound.howlerIds.filter((i) => i !== id)));
	}}
	style:background-color={pad.color}
	class={`transition-all h-48 font-black rounded-md grid place-items-center uppercase cursor-pointer border-[3.5px] border-black text-lg ${
		disabled ? 'cursor-default' : 'active:translate-y-1 active:scale-95'
	}`}
	{disabled}
	audio-source={pad.loc}
>
	{pad.name}
</button>
