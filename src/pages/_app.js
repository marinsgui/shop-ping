import '@/styles/globals.css'

import Header from '@/components/Header'
import Announcement from '@/components/Announcement'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Announcement />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
