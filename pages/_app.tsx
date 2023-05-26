import 'swiper/swiper.min.css'
import 'swiper/css/pagination'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
