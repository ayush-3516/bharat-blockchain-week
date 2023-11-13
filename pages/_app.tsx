import { AppProps /* , AppContext */ } from 'next/app';
import 'styles/globals.css';
import 'styles/main.css'
import { Toaster } from 'react-hot-toast'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Toaster />
      <Component {...pageProps} />
    </div>);
}

export default App;
