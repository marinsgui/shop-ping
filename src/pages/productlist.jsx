import styled from "styled-components"

import Products from "@/components/Products"

import Head from "next/head"

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    font-size: 16px;
`

export default function Productlist() {
  return (
    <>
      <Head>
        <title>Produtos - ShopPing</title>
      </Head>

      <Container>
        <Title>Vestidos</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filtrar produtos:</FilterText>
            <Select>
              <Option disabled selected>Cor</Option>
              <Option>Azul</Option>
              <Option>Amarelo</Option>
              <Option>Vermelho</Option>
              <Option>Verde</Option>
            </Select>

            <Select>
              <Option disabled selected>
                Tamanho
              </Option>
              <Option>P</Option>
              <Option>M</Option>
              <Option>G</Option>
              <Option>GG</Option>
              <Option>XG</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Ordenar produtos:</FilterText>
            <Select>
              <Option selected>Mais novo</Option>
              <Option>Menor preço</Option>
              <Option>Maior preço</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
      </Container>
    </>
  )
}
