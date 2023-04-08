import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
        ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
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

export default function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CRIE A SUA CONTA</Title>
            <Form>
                <Input placeholder="Nome de usuário" />
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme a sua senha" />
                <Button>CRIAR CONTA</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
