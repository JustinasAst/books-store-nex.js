import '../styles/globals.css';
import '../styles/navigation.css';
import '../styles/header.css';
import '../styles/listenedBookBox.css';
import '../styles/recentlyPlayedBox.css';
import '../styles/mostPopularSection.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
