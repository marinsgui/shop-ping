import { Add, Remove } from "@mui/icons-material"

import styled from "styled-components"

import { mobile } from "@/responsive"

import Head from "next/head"

import { useRouter } from "next/router"

import { useEffect, useState } from "react"

import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'

import { db } from "@/services/firebaseConnection"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({ padding: '10px', flexDirection: 'column' })}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: '40vh' })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;

    ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({ width: '100%' })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: teal;
        color: white;
    }
`

export default function Product() {
    const [product, setProduct] = useState(null)

    const { query: { id } } = useRouter()

    useEffect(() => {
        (async () => {
            if (!id) return
            
            const docRef = doc(db, 'products', id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const data = docSnap.data()
                setProduct(data)
            }
        })()
    }, [id])

    return (
        <>
            <Head>
                <title>{product?.title}</title>
            </Head>
            <Container>
                <Wrapper>
                    <ImgContainer>
                        <Image src={product?.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product?.title}</Title>
                        <Desc>{product?.desc}</Desc>
                        <Price>R${product?.price}</Price>
                        <AddContainer>
                            <AmountContainer>
                                <Remove />
                                <Amount>1</Amount>
                                <Add />
                            </AmountContainer>
                            <Button>ADICIONAR AO CARRINHO</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            </Container>
        </>
    )
}