import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Link from "next/link";

import { mobile } from "@/responsive";

import { useSelector } from "react-redux";

import { useSession } from "next-auth/react";

import { Close } from "@mui/icons-material";

import { signOut } from "next-auth/react";

const Container = styled.header`
  background-color: white;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;

  ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;

  ${mobile({ marginLeft: "20px" })}
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  > img {
    width: 30px;
    border-radius: 50%;
  }

  > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default function Header() {
  const quantity = useSelector((state) => state.ping.products.length);

  const { data: session } = useSession();

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Faça a sua busca" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              href="/"
            >
              PING.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            {!session && (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/login"
              >
                ENTRAR
              </Link>
            )}

            {session && (
              <UserContainer>
                <img src={session?.user?.image} alt={session?.user?.name} />
                <p>{session?.user?.name}</p>
                <button title="Sair da conta" onClick={() => signOut()}>
                  <Close />
                </button>
              </UserContainer>
            )}
          </MenuItem>
          <MenuItem>
            <Link href="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
