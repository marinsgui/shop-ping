import Product from "./Product";

import { collection, getDocs } from "firebase/firestore";

import { db } from "@/services/firebaseConnection";

import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "products");

      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setProducts(docs);
    })();
  }, []);

  return (
    <div className="p-5 flex flex-wrap justify-between">
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}
