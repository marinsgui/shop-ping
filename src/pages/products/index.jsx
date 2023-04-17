import Products from "@/components/Products";

import Head from "next/head";

export default function Productlist() {
  return (
    <>
      <Head>
        <title>Produtos - ShopPing</title>
      </Head>

      <div>
        <h2 className="m-5 text-4xl">Produtos</h2>
        <Products />
      </div>
    </>
  );
}
