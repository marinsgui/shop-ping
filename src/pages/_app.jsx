import "@/styles/globals.css";

import Header from "@/components/Header";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

import { Provider } from "react-redux";

import { store, persistor } from "@/redux/store";

import { PersistGate } from "redux-persist/integration/react";

import { app } from "@/services/firebaseConnection";

import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store} app={app}>
        <PersistGate loading={"loading"} persistor={persistor}>
          <Announcement />
          <Header />
          <Component {...pageProps} />
          <Newsletter />
          <Footer />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
