import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const resp = await (await fetch('/api/audios')).json();
	const COLOR_PALLETTE = ['#D56F3E', '#247FBC', '#C7EF00'];
	const randIndex = Math.floor(Math.random() * COLOR_PALLETTE.length);
	return { audios: resp.audios, color: COLOR_PALLETTE[randIndex] };
};
