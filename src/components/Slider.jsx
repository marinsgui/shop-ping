import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "@/services/firebaseConnection";

import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "sliderItems");

      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setSliderItems(docs);
    })();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!paused) {
        setSlideIndex((prevState) => {
          const newIndex = prevState + 1;
          return newIndex >= sliderItems.length ? 0 : newIndex;
        });
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [paused, sliderItems.length]);

  function handleMouseEnter() {
    setPaused(true);
  }

  function handleMouseLeave() {
    setPaused(false);
  }

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <div
      className="w-full h-screen hidden md:flex relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center absolute top-0 bottom-0 left-3 m-auto cursor-pointer opacity-50 z-10"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>

      <div
        className={`h-full flex transition-all ease-in-out duration-1000`}
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
        slideIndex={slideIndex}
      >
        {sliderItems.map((item) => (
          <div
            className="w-screen h-screen flex items-center"
            key={item.id}
            bg={item.bg}
            style={{ backgroundColor: `${item.bg}` }}
          >
            <div className="h-full flex-1">
              <Image width={800} height={800} src={item.img} alt={item.title} />
            </div>
            <div className="flex-1 p-12">
              <h2 className="text-7xl font-semibold">{item.title}</h2>
              <p className="my-12 text-xl font-medium tracking-widest">
                {item.desc}
              </p>
              <Link href="/products">
                <button className="p-3 text-xl bg-transparent cursor-pointer border-2 border-black hover:bg-teal-600">
                  COMPRE AGORA
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center absolute top-0 bottom-0 right-3 m-auto cursor-pointer opacity-50 z-10"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
}
