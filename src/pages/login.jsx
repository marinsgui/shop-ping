import Head from "next/head";

import { GitHub } from "@mui/icons-material";

import { getSession, signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="h-screen bg-[url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover flex justify-center items-center">
        <div className="w-4/5 md:w-1/4 p-5 bg-white">
          <h2 className="text-2xl font-light">ENTRAR NA SUA CONTA</h2>
          <button
            className="flex justify-center items-center gap-2 w-full border-none my-3 py-4 px-5 bg-teal-600 text-white cursor-pointer"
            onClick={() => signIn("github")}
          >
            <GitHub />ENTRAR COM GITHUB
          </button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
