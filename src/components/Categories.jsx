import CategoryItem from "./CategoryItem";

import { collection, getDocs } from "firebase/firestore";

import { db } from "@/services/firebaseConnection";

import { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "categories");

      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setCategories(docs);
    })();
  }, []);

  return (
    <div className="flex flex-col md:flex-row p-0 md:p-5 justify-between">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
