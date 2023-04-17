import { Send } from "@mui/icons-material";

export default function Newsletter() {
  return (
    <div className="h-[60vh] bg-red-50 flex flex-col justify-center items-center">
      <h2 className="text-7xl mb-5">Newsletter</h2>
      <div className="text-2xl text-center font-light mb-5">
        Receba informações sobre nossos produtos!
      </div>
      <div className="w-4/5 md:w-1/2 h-10 bg-white flex justify-between border border-gray-500">
        <input
          className="border-none flex-[4] pl-5"
          placeholder="Insira seu email"
        />
        <button className="flex-1 border-none bg-teal-600 text-white">
          <Send />
        </button>
      </div>
    </div>
  );
}
