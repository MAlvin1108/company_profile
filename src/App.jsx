// src/App.jsx
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import KeunggulanProduk from "./components/KeunggulanProduct/KeunggulanProduct.jsx";
import Produk from "./components/Produk/Produk.jsx";
import Review from "./components/Review/Review.jsx";
import Lokasi from "./components/Lokasi/Lokasi.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutUs />
        <KeunggulanProduk />
        <Produk />
        <Review />
        <Lokasi />
      </main>
      <Footer />
    </>
  );
}

export default App;
