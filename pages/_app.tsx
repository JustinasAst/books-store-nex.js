import '../styles/globals.css';
import '../styles/navigation.css';
import '../styles/header.css';
import '../styles/listenedBookBox.css';
import '../styles/recentlyPlayedBox.css';
import '../styles/mostPopularSection.css';
import '../styles/sideBookSection.css';
import '../styles/audioPlayer.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux-book-store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
