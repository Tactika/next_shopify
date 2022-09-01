import "../styles/globals.css";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
