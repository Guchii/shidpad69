const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Fredoka One', ...defaultTheme.fontFamily.sans],
				cursive: ['Grandstander', 'cursive']
			},
			colors: {
				'rose-madder': '#df2935',
				'yellow-orange': '#ffb140',
				'raisin-black': '#181d27'
			}
		}
	},
	plugins: []
};
