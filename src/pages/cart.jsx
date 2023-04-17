import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import { Add, Close, Remove } from "@mui/icons-material";

import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
} from "@/redux/pingRedux";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Cart() {
  const [total, setTotal] = useState("");

  const products = useSelector((state) => state.ping.products);

  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotal(price.toFixed(2));
  }, [products]);

  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <div>
        <div className="p-3 md:p-5">
          <h2 className="font-light text-2xl text-center">SEU CARRINHO</h2>
          <div className="flex justify-between items-center gap-5 md:gap-5 p-5">
            <Link href="/products">
              <button className="p-3 font-semibold cursor-pointer border-2 border-black">
                CONTINUAR COMPRANDO
              </button>
            </Link>
            <div className="hidden md:block">
              <span className="underline cursor-pointer px-3">
                Carrinho ({products.quantity ?? 0})
              </span>
              <span className="underline cursor-pointer px-3">
                Sua lista de desejos (0)
              </span>
            </div>
            <button
              className="p-3 font-semibold cursor-pointer bg-black text-white"
              type="filled"
            >
              FINALIZAR COMPRA
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-[3]">
              {products.length === 0 && (
                <div className="flex flex-col md:flex-row justify-between">
                  O seu carrinho está vazio.
                </div>
              )}
              {products &&
                products.map((product) => (
                  <div
                    className="flex flex-col md:flex-row justify-between"
                    key={product.id}
                  >
                    <div className="flex-[2] flex">
                      <div
                        className="my-auto pr-3"
                        onClick={() => dispatch(deleteItem(product.id))}
                        style={{ cursor: "pointer" }}
                      >
                        <Close />
                      </div>
                      <Image
                        className="w-52"
                        src={product.img}
                        width={500}
                        height={500}
                        alt={product.title}
                      />
                      <div className="p-5 flex flex-col justify-around">
                        <span>
                          <b>Produto: </b>
                          {product.title}
                        </span>
                        <span>{product.desc}</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <div className="flex items-center mb-5">
                        <div
                          onClick={() =>
                            dispatch(
                              decrementQuantity({
                                ...product,
                                quantity: product.quantity,
                                id: product.id,
                                price: product.price * product.quantity,
                              })
                            )
                          }
                        >
                          <Remove style={{ cursor: "pointer" }} />
                        </div>
                        <div className="text-2xl my-1 mx-4 md:m-1">
                          {product.quantity}
                        </div>
                        <div
                          onClick={() =>
                            dispatch(
                              incrementQuantity({
                                ...product,
                                quantity: product.quantity,
                                id: product.id,
                                price: product.price * product.quantity,
                              })
                            )
                          }
                        >
                          <Add style={{ cursor: "pointer" }} />
                        </div>
                      </div>
                      <div className="text-3xl font-extralight mb-5 md:mb-0">
                        R$ {(product.price * product.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex-1 border border-gray-300 rounded-xl p-5 h-[50vh]">
              <h2 className=" text-lg font-extralight">SEU PEDIDO:</h2>
              <div className="my-8 flex justify-between ">
                <span>Subtotal:</span>
                <span>R$ {total}</span>
              </div>
              <div className="my-8 flex justify-between ">
                <span>Frete:</span>
                <span>R$ 9,99</span>
              </div>
              <div className="my-8 flex justify-between ">
                <span>Desconto de frete:</span>
                <span>R$ -9,99</span>
              </div>
              <div
                className="my-8 flex justify-between font-medium text-2xl"
                type="total"
              >
                <span>Total:</span>
                <span>R$ {total}</span>
              </div>
              <button className="w-full p-3 bg-black text-white font-semibold cursor-pointer">
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
