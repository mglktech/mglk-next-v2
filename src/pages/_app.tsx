import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css';
import "../styles/globals.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
