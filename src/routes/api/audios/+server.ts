import type { RequestHandler } from './$types';
import { capitalCase } from 'change-case';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export const GET: RequestHandler = async () => {
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
	return new Response(JSON.stringify({ audios }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
