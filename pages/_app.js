import 'tailwindcss/tailwind.css';

import '../styles/index.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function MyApp({ Component, pageProps }) {
	return (
		<div className="bod">
			<style jsx>{`
				.bod {
					display: flex;
					flex-direction: column;
					min-height: 100vh;
					margin: 0;
					padding: 0;
				}
				.root {
					display: flex;
					flex-grow: 1;
					flex-direction: column;
				}
			`}</style>

			<div>
				<Navigation />
			</div>

			<div className="root">
				<Component {...pageProps} />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
}
