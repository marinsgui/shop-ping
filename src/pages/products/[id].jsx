import { Add, Remove } from "@mui/icons-material";

import Head from "next/head";

import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";

import { db } from "@/services/firebaseConnection";

import { addProduct } from "@/redux/pingRedux";

import { useDispatch } from "react-redux";

import Image from "next/image";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    (async () => {
      if (!id) return;

      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setProduct(data);
      }
    })();
  }, [id]);

  function handleClick() {
    dispatch(
      addProduct({
        ...product,
        quantity,
        id,
        price: product.price,
      })
    );
  }

  function removeItem() {
    if (quantity === 1) {
      setQuantity((prevState) => (prevState = 1));
    } else {
      setQuantity((prevState) => prevState - 1);
    }
  }

  function addItem() {
    setQuantity((prevState) => prevState + 1);
  }

  return (
    <>
      <Head>
        <title>{product?.title}</title>
      </Head>
      <div>
        <div className="flex flex-col md:flex-row p-5 md:p-12">
          <div className="flex-1">
            <Image
              className="w-full h-[40vh] md:h-[90vh] object-cover"
              src={product?.img}
              width={500}
              height={500}
              alt={product?.title}
            />
          </div>
          <div className="flex-1 px-3 md:p-12">
            <h2 className="text-3xl font-extralight">{product?.title}</h2>
            <p className="py-5">{product?.desc}</p>
            <span className="font-thin text-4xl">
              R${product?.price.toFixed(2)}
            </span>
            <div className="w-full md:w-1/2 flex justify-between items-center font-bold">
              <div className="flex items-center font-bold">
                <Remove
                  onClick={() => removeItem()}
                  style={{ cursor: "pointer" }}
                />
                <span className="w-8 h-8 rounded-xl flex justify-center items-center mx-1 border border-teal-600">
                  {quantity}
                </span>
                <Add onClick={() => addItem()} style={{ cursor: "pointer" }} />
              </div>
              <button
                className="p-4 border-2 border-teal-600 bg-white font-medium cursor-pointer hover:bg-teal-600 hover:text-white"
                onClick={handleClick}
              >
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
