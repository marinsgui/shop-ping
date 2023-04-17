import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Link from "next/link";

import { useSelector } from "react-redux";

import { useSession } from "next-auth/react";

import { Close } from "@mui/icons-material";

import { signOut } from "next-auth/react";

import Image from "next/image";

export default function Header() {
  const quantity = useSelector((state) => state.ping.products.length);

  const { data: session } = useSession();

  return (
    <header className="bg-white h-12 md:h-16 sticky top-0 z-10">
      <div className="py-3 px-0 md:px-5 flex justify-between">
        <div className="hidden md:flex items-center flex-1">
          <div className="border border-gray-300 flex items-center ml-6 p-1">
            <input type="text" placeholder="Faça a sua busca" className="border-none outline-none" />
            <SearchIcon style={{ color: "gray", fontSize: 20 }} />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-center text-xl md:text-3xl">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              href="/"
            >
              PING.
            </Link>
          </h1>
        </div>

        <div className="flex-2 md:flex-1 flex justify-center md:justify-end items-center">
          <div className="text-sm ml-5 md:ml-6">
            {!session && (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/login"
              >
                ENTRAR
              </Link>
            )}

            {session && (
              <div className="flex justify-between items-center gap-2">
                <Image src={session?.user?.image} width={30} height={30} alt={session?.user?.name} className="rounded-full" />
                <p>{session?.user?.name}</p>
                <button title="Sair da conta" onClick={() => signOut()} className="border-none bg-transparent cursor-pointer">
                  <Close />
                </button>
              </div>
            )}
          </div>
          <div className="text-sm mx-5 md:ml-6 md:mr-0">
            <Link href="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
