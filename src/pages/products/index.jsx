import styled from "styled-components";

import Products from "@/components/Products";

import Head from "next/head";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

export default function Productlist() {
  return (
    <>
      <Head>
        <title>Produtos - ShopPing</title>
      </Head>

      <Container>
        <Title>Produtos</Title>
        <Products />
      </Container>
    </>
  );
}
