import Categories from '@/components/Categories'
import Slider from '@/components/Slider'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopPing</title>
      </Head>
      <main>
        <Slider />
        <Categories />
      </main>
    </>
  )
}
