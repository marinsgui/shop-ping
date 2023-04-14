import "@/styles/globals.css";

import Header from "@/components/Header";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

import { Provider } from "react-redux";

import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Announcement />
      <Header />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </Provider>
  );
}
