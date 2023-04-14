import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

import styled from "styled-components";

import { mobile } from "@/responsive";

const Container = styled.footer`
  display: flex;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>PING.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          suscipit minima nulla nam fugiat ducimus? Debitis inventore, cum
          voluptatum aliquid, enim earum temporibus eligendi, blanditiis
          accusamus quas distinctio perferendis officia.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links úteis</Title>
        <List>
          <ListItem>Página inicial</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Moda Feminina</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Acompanhamento de pedidos</ListItem>
          <ListItem>Lista de desejos</ListItem>
          <ListItem>Termos e condições</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Avenida Brasil, 123 - Rio de Janeiro, RJ
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          (021)99999-9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contato@ping.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
