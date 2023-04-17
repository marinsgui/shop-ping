import { SearchOutlined } from "@mui/icons-material";

import Link from "next/link";
import Image from "next/image";

export default function Product({ item }) {
  return (
    <div className="flex-1 m-1 min-w-[280px] h-80 flex justify-center items-center bg-slate-100 relative group">
      <div className="w-52 h-52 rounded-full bg-white absolute" />
      <Image
        className="z-10"
        src={item.img}
        width={200}
        height={200}
        alt={item.title}
      />
      <div className="opacity-0 w-full h-full absolute top-0 left-0 bg-black/20 z-10 flex justify-center items-center transition-all duration-500 ease-in-out cursor-pointer group-hover:opacity-100">
        <div className="w-10 h-10 rounded-full flex justify-center items-center m-3 transition-all duration-500 ease-in-out bg-slate-50 hover:scale-110">
          <Link href={`/products/${item.id}`} style={{ color: "black" }}>
            <SearchOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
}
