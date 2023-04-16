import Head from "next/head";

import styled from "styled-components";

import { mobile } from "@/responsive";

import { GitHub } from "@mui/icons-material";

import { getSession, signIn } from "next-auth/react";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  margin: 10px 0;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Wrapper>
          <Title>ENTRAR NA SUA CONTA</Title>
            <Button onClick={() => signIn('github')}><GitHub /> ENTRAR COM GITHUB</Button>
        </Wrapper>
      </Container>
    </>
  );
}

export const getServerSideProps = async(context) => {
  const session = await getSession(context)

  if(session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}