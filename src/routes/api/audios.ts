import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { capitalCase } from 'change-case';

/** @type {import('./audios').RequestHandler} */
export async function get() {
	const oneShot = readdirSync(join('static', 'audio', 'one-shot')).map((e) => ({
		name: e.replace('.mp3', ''),
		loc: `/audio/one-shot/${e}`
	}));
	const longRunning = readdirSync(join('static', 'audio', 'long-running')).map((e) => ({
		name: e.replace('.mp3', ''),
		loc: `/audio/long-running/${e}`
	}));
	let audios = oneShot.map((e) => ({ ...e, name: capitalCase(e.name), oneShot: true }));
	audios = [
		...audios,
		...longRunning.map((e) => ({ ...e, name: capitalCase(e.name), oneShot: false }))
	];
	audios = audios.map((e, index) => ({ id: index, ...e }));
	return { body: { audios } };
}
