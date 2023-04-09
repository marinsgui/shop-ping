import { Add, Remove } from "@mui/icons-material"

import Head from "next/head"

import styled from "styled-components"

import { mobile } from "@/responsive"

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
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span``
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
`


export default function Cart() {
    return (
        <>
            <Head>
                <title>Carrinho</title>
            </Head>
            <Container>
                <Wrapper>
                    <Title>SEU CARRINHO</Title>
                    <Top>
                        <TopButton>CONTINUAR COMPRANDO</TopButton>
                        <TopTexts>
                            <TopText>Carrinho (2)</TopText>
                            <TopText>Sua lista de desejos (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">FINALIZAR COMPRA</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://60398.cdn.simplo7.net/static/60398/sku/masculino-tenis-qix-smash-1640638551971.jpg" />
                                    <Details>
                                        <ProductName><b>Product: </b>TÊNIS QIX SMASH</ProductName>
                                        <ProductId><b>ID: </b>468468494949</ProductId>
                                        <ProductColor color="black" />
                                        <ProductSize><b>Tamanho: </b>42</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Add />
                                        <Amount>2</Amount>
                                        <Remove />
                                    </AmountContainer>
                                    <Price>R$ 109</Price>
                                </PriceDetail>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                    <Image src="https://60398.cdn.simplo7.net/static/60398/sku/masculino-tenis-qix-smash-1640638551971.jpg" />
                                    <Details>
                                        <ProductName><b>Product: </b>TÊNIS QIX SMASH</ProductName>
                                        <ProductId><b>ID: </b>468468494949</ProductId>
                                        <ProductColor color="black" />
                                        <ProductSize><b>Tamanho: </b>42</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Add />
                                        <Amount>2</Amount>
                                        <Remove />
                                    </AmountContainer>
                                    <Price>R$ 109</Price>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>SEU PEDIDO:</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal:</SummaryItemText>
                                <SummaryItemPrice>R$ 220</SummaryItemPrice>
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
                                <SummaryItemPrice>R$ 220</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryButton>FINALIZAR COMPRA</SummaryButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    )
}