import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px; 
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

export default function CategoryItem({ item }) {
    return (
        <Container key={item.id}>
            <Image src={item.img} />
            <InfoContainer>
                <Title>{item.title}</Title>
                <Button>COMPRE AGORA</Button>
            </InfoContainer>
        </Container>
    )
}