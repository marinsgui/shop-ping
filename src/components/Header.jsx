import styled from "styled-components"

import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Container = styled.header`
    height: 60px;
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

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
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
                <Logo>PING.</Logo>
            </Center>
            <Right>
                <MenuItem>CADASTRE-SE</MenuItem>
                <MenuItem>ENTRE</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
