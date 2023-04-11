import Head from "next/head"

import styled from "styled-components"

import { mobile } from "@/responsive"

import { useSelector } from "react-redux"

import Link from "next/link"

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
    const cart = useSelector(state => state.cart)

    return (
        <>
            <Head>
                <title>Carrinho</title>
            </Head>
            <Container>
                <Wrapper>
                    <Title>SEU CARRINHO</Title>
                    <Top>
                        <Link href='/products'>
                            <TopButton>CONTINUAR COMPRANDO</TopButton>
                        </Link>
                        <TopTexts>
                            <TopText>Carrinho ({cart.quantity})</TopText>
                            <TopText>Sua lista de desejos (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">FINALIZAR COMPRA</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map(product => (
                                <Product key={product.id}>
                                    <ProductDetail>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName><b>Produto: </b>{product.title}</ProductName>
                                            <ProductId>{product.desc}</ProductId>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <AmountContainer>
                                            <Amount>Quantidade: {product.quantity}</Amount>
                                        </AmountContainer>
                                        <Price>R$ {product.price.toFixed(2)}</Price>
                                    </PriceDetail>
                                </Product>
                            ))}
                            <Hr />
                        </Info>
                        <Summary>
                            <SummaryTitle>SEU PEDIDO:</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal:</SummaryItemText>
                                <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Frete:</SummaryItemText>
                                <SummaryItemPrice>R$ 9,99</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Desconto de frete:</SummaryItemText>
                                <SummaryItemPrice>R$ -9,99</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type='total'>
                                <SummaryItemText>Total:</SummaryItemText>
                                <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryButton>FINALIZAR COMPRA</SummaryButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    )
}