import styled from "styled-components"

import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import Link from "next/link"

import { mobile } from "@/responsive"

const Container = styled.header`
    background-color: white;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 10;

    ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    ${mobile({ padding: '10px 0' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    ${mobile({ display: 'none' })}
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

    ${mobile({ fontSize: '20px' })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${mobile({ justifyContent: 'center', flex: 2 })}
`

const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;

    ${mobile({ marginLeft: '20px' })}
`

export default function Header() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Faça a sua busca" />
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
                  <MenuItem>
                      <Link style={{textDecoration: 'none', color: 'black'}} href='/register'>CADASTRE-SE</Link>
                  </MenuItem>
                  <MenuItem>
                      <Link style={{textDecoration: 'none', color: 'black'}} href='/login'>ENTRE</Link>
                  </MenuItem>
                  <MenuItem>
                      <Link href='/cart'>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </Link>
                  </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
