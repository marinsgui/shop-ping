import Head from "next/head"

import styled from "styled-components"

import { mobile } from "@/responsive"

import { useDispatch, useSelector } from "react-redux"

import Link from "next/link"

import { Add, Close, Remove } from "@mui/icons-material"

import { incrementQuantity, decrementQuantity, deleteItem } from "@/redux/cartRedux"

import { useEffect, useState } from "react"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    ${mobile({ gap: '20px' })}
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
    ${mobile({ display: 'none'})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
    flex: 3;
`

const CloseButton = styled.div`
    margin: auto 0;
    padding: 0 1rem 0 0;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Amount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({ margin: '5px 15px' })}
`

const Price = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

export default function Cart() {
  const [total, setTotal] = useState("");

  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotal(price.toFixed(2));
  }, [products]);

  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <Container>
        <Wrapper>
          <Title>SEU CARRINHO</Title>
          <Top>
            <Link href="/products">
              <TopButton>CONTINUAR COMPRANDO</TopButton>
            </Link>
            <TopTexts>
              <TopText>Carrinho ({products.quantity ?? 0})</TopText>
              <TopText>Sua lista de desejos (0)</TopText>
            </TopTexts>
            <TopButton type="filled">FINALIZAR COMPRA</TopButton>
          </Top>
          <Bottom>
            <Info>
              {products.map((product) => (
                <Product key={product.id}>
                  <ProductDetail>
                    <CloseButton
                      onClick={() => dispatch(deleteItem(product.id))}
                      style={{ cursor: "pointer" }}
                    >
                      <Close />
                    </CloseButton>
                    <Image src={product.img} alt={product.title} />
                    <Details>
                      <ProductName>
                        <b>Produto: </b>
                        {product.title}
                      </ProductName>
                      <ProductId>{product.desc}</ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <div
                        onClick={() =>
                          dispatch(
                            decrementQuantity({
                              ...product,
                              quantity: product.quantity,
                              id: product.id,
                              price: product.price * product.quantity,
                            })
                          )
                        }
                      >
                        <Remove style={{ cursor: "pointer" }} />
                      </div>
                      <Amount>{product.quantity}</Amount>
                      <div
                        onClick={() =>
                          dispatch(
                            incrementQuantity({
                              ...product,
                              quantity: product.quantity,
                              id: product.id,
                              price: product.price * product.quantity,
                            })
                          )
                        }
                      >
                        <Add style={{ cursor: "pointer" }} />
                      </div>
                    </AmountContainer>
                    <Price>
                      R$ {(product.price * product.quantity).toFixed(2)}
                    </Price>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>SEU PEDIDO:</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal:</SummaryItemText>
                <SummaryItemPrice>R$ {total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Frete:</SummaryItemText>
                <SummaryItemPrice>R$ 9,99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Desconto de frete:</SummaryItemText>
                <SummaryItemPrice>R$ -9,99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemPrice>R$ {total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>FINALIZAR COMPRA</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
}