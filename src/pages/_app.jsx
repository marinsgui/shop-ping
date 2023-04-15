import "@/styles/globals.css";

import Header from "@/components/Header";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

import { Provider } from "react-redux";

import { store , persistor } from "@/redux/store";

import { PersistGate } from "redux-persist/integration/react";

import { app } from "@/services/firebaseConnection";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <Announcement />
        <Header />
        <Component {...pageProps} />
        <Newsletter />
        <Footer />
      </PersistGate>
    </Provider>
  );
}
