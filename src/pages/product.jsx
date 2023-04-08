import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
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

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        background-color: #f8f4f4;
    }
`

export default function Product() {
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Macacão Jeans</Title>
                    <Desc>lorem rlorem roremor maeo moamr eaomf eoamfea ofeaifeaofjoiafajoifnaoifeanofieanfoanfa fea ofinae ofinae ofnae ofiaen foaei naoef no ifnaoef naoef n</Desc>
                    <Price>R$ 29,90</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Cor</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>P</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>G</FilterSizeOption>
                                <FilterSizeOption>GG</FilterSizeOption>
                                <FilterSizeOption>XG</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
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
    )
}