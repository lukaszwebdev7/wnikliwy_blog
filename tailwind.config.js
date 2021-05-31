module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		textColor: (theme) => ({
			...theme('colors'),
			'blue-text': '#011EFF',
			'gray-75': '#bfbfbf',
			'gray-25': '#404040',
			white: '#ffffff',
			coffee: '#AA7642',
			lightblue: '#2458C4',
			gold: '#A98A51',
			black: '#000000'
		}),
		borderColor: (theme) => ({
			...theme('colors'),
			default: theme('colors.gray.300', 'currentColor'),
			coffee: '#AA7642',
			black: '#000',
			gold: '#A98A51'
		}),
		fontFamily: {
			sans: 'Roboto',
			mono: [ 'SFMono-Regular', 'Menlo' ],
			display: [ '"Londrina Outline"' ],
			body: [ 'Open Sans' ]
		},
		boxShadow: {
			'3xl': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
		},
		extend: {
			width: {
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%'
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1'
			},
			spacing: {
				28: '7rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			},
			backgroundImage: (theme) => ({
				paragrafy: "url('/assets/img/paragrafy.jpg')"
			}),
			backgroundSize: {
				auto: 'auto',
				cover: 'cover',
				contain: 'contain',
				'100%': '100%',
				'16': '4rem'
			},
			backgroundColor: (theme) => ({
				...theme('colors'),
				'yellow-box': '#AA7642',
				'blue-bg': '#011EFF',
				gray: '#333333',
				white: '#FFFFFF',
				lightblue: '#2458C4',
				footer: '#003366',
				gold: '#A98A51',
				indigo: '#0D4F8B',
				black: '#000000'
			}),
			lineHeight: {
				'16': '4rem'
			}
		}
	},
	variants: {
		textColor: [ 'active' ],
		backgroundColor: [ 'responsive', 'hover', 'focus', 'active' ]
	},
	plugins: []
};
