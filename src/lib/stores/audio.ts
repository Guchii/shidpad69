import type { Howl } from 'howler';
import { writable } from 'svelte/store';

export const audioSources = writable<
	{
		// a reference to the howler object that will play the actual sound
		audioRef: Howl;
		// whether the sound should be treated as a one-shot audio
		oneShot: boolean;
		// the howler IDS of the sounds that were generated from this instance that are
		// currently playing
		howlerIds: number[];
	}[]
>([]);
