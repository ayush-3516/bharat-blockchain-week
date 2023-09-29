import { AppProps /* , AppContext */ } from 'next/app';
import 'styles/globals.css';
import 'styles/main.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>);
}

export default App;
