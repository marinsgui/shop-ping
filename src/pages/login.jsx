import Head from "next/head"

import styled from "styled-components"

import { mobile } from "@/responsive"

const Container = styled.div`
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
        ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({ width: '80%' })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    margin: 10px 0;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container>
                <Wrapper>
                    <Title>ENTRAR NA SUA CONTA</Title>
                    <Form>
                        <Input placeholder="Nome de usuário" />
                        <Input placeholder="Senha" type="password" />
                        <Button>ENTRAR</Button>
                        <Link>ESQUECEU SUA SENHA?</Link>
                        <Link>CRIAR UMA NOVA CONTA</Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
  )
}
