import { capitalCase } from 'change-case';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

/** @type {import('./audios').RequestHandler} */
export async function get() {
	const _getPropsFromName = (name: string, oneShot: boolean) => ({
		name: capitalCase(name.replace('.mp3', '')),
		loc: `/audio/${oneShot ? 'one-shot' : 'long-running'}/${name}`,
		oneShot: oneShot
	});
	const oneShot = readdirSync(join('static', 'audio', 'one-shot')).map((n) =>
		_getPropsFromName(n, true)
	);
	const longRunning = readdirSync(join('static', 'audio', 'long-running')).map((n) =>
		_getPropsFromName(n, false)
	);
	const audios = [...oneShot, ...longRunning].map((e, index) => ({ id: index, ...e }));
	return { body: { audios } };
}
