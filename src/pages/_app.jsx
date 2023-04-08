import '@/styles/globals.css'

import Header from '@/components/Header'
import Announcement from '@/components/Announcement'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Announcement />
      <Header />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </>
  )
}
