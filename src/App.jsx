import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from "./components/Products";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import AOS from "aos";
import "aos/dist/aot.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return ( 
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
    </div>
  );
}

export default App