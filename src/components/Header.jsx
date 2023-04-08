import styled from "styled-components"

import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import Link from "next/link"

const Container = styled.header`
    background-color: white;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 10;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
    
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
`

const Center = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export default function Header() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>PT-BR</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
                </SearchContainer>
            </Left>
            <Center>
                  <Logo>
                      <Link
                          style={{
                              textDecoration: 'none',
                              color: 'black'
                          }}
                          href='/'
                      >
                        PING.
                      </Link>
                    </Logo>
            </Center>
            <Right>
                  <Link
                      style={{
                          fontSize: '14px',
                          textDecoration: 'none',
                          color: 'black',
                          marginLeft: '25px'
                      }}
                      href='/register'
                  >
                      CADASTRE-SE
                  </Link>
                  <Link
                      style={{
                          fontSize: '14px',
                          textDecoration: 'none',
                          color: 'black',
                          marginLeft: '25px'
                      }}
                      href='/login'
                  >
                      ENTRE
                  </Link>
                  <Link
                      style={{
                          fontSize: '14px',
                          textDecoration: 'none',
                          color: 'black',
                          marginLeft: '25px'
                      }}
                      href='/cart'
                  >
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}
