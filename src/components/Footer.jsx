import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
  const listItems = [
    {
      id: 1,
      title: "Página inicial",
    },
    {
      id: 2,
      title: "Carrinho",
    },
    {
      id: 3,
      title: "Moda masculina",
    },
    {
      id: 4,
      title: "Moda feminina",
    },
    {
      id: 5,
      title: "Acessórios",
    },
    {
      id: 6,
      title: "Minha conta",
    },
    {
      id: 7,
      title: "Acompanhamento de pedidos",
    },
    {
      id: 8,
      title: "Lista de desejos",
    },
    {
      id: 9,
      title: "Termos e condições",
    },
  ];

  return (
    <footer className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col p-5">
        <h2 className="text-2xl font-bold">PING.</h2>
        <p className="my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          suscipit minima nulla nam fugiat ducimus? Debitis inventore, cum
          voluptatum aliquid, enim earum temporibus eligendi, blanditiis
          accusamus quas distinctio perferendis officia.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full text-white flex justify-center items-center bg-[#3b5999]">
            <Facebook />
          </div>
          <div className="w-10 h-10 rounded-full text-white flex justify-center items-center bg-[#e4405f]">
            <Instagram />
          </div>
          <div className="w-10 h-10 rounded-full text-white flex justify-center items-center bg-[#55acee]">
            <Twitter />
          </div>
          <div className="w-10 h-10 rounded-full text-white flex justify-center items-center bg-[#e60023]">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 hidden md:block">
        <h3 className="mb-8">Links úteis</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          {listItems.map((item) => (
            <li className="w-1/2 mb-5" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-5 bg-red-50 md:bg-white">
        <h3 className="mb-8">Contato</h3>
        <div className="mb-5 flex items-center">
          <Room style={{ marginRight: "10px" }} />
          Avenida Brasil, 123 - Rio de Janeiro, RJ
        </div>
        <div className="mb-5 flex items-center">
          <Phone style={{ marginRight: "10px" }} />
          (021)99999-9999
        </div>
        <div className="mb-5 flex items-center">
          <MailOutline style={{ marginRight: "10px" }} />
          contato@ping.com
        </div>
        <Image
          className="w-1/2"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          width={500}
          height={500}
          alt="Métodos de pagamento"
        />
      </div>
    </footer>
  );
}
