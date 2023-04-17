import Link from "next/link";
import Image from "next/image";

export default function CategoryItem({ item }) {
  return (
    <div className="flex-1 m-1 h-[70vh] relative">
      <Image
        className="object-cover h-[25vh] md:w-full md:h-full"
        src={item.img}
        width={500}
        height={500}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h3 className="text-white text-2xl font-semibold mb-5">{item.title}</h3>
        <Link href="/products">
          <button className="border-none p-3 bg-white text-gray-800 cursor-pointer font-semibold">
            COMPRE AGORA
          </button>
        </Link>
      </div>
    </div>
  );
}
