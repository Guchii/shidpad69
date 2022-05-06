import { writable } from "svelte/store";

export const currentlyPlayingAudio = writable<number[]>([]);
