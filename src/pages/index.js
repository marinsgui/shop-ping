import Categories from '@/components/Categories'
import Products from '@/components/Products'
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
        <Products />
      </main>
    </>
  )
}
