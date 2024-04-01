
import { useState } from "react";
import { useEffect } from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/Product/About";
import Contact from "./components/Product/Contact";
import ProductList from "./components/Product/ProductList"
import Banner from "./components/Product/Banner"
import Footer from "./components/Product/Footer"


function App() {

  // 
  const [banners, setBanners] = useState([])
  const [products, setProducts] = useState([])
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/banners")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBanners(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch("https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=76570098-dd66-90d6-7bde-9c9ba5b25f4c&category=1882&page=2&urlKey=dien-gia-dung")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setProducts(data['data'])
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, [])



  return (
    <div className="App">
      {/* Header */}
      <Header isShow={isShowMenu} setIsShowMenu={setIsShowMenu} />
      {/* banner */}
      {banners.map((banner) => (
        <Banner title={banner.title} />
      ))}
      {/* end banner */}
      {/* start our product */}
      <ProductList products={products} />
      {/* end our product */}
      {/* about section start */}
      <About />
      {/* about section end */}
      {/*about section start*/}
      <Contact />
      {/*end*/}
      {/*  footer start */}
      <Footer />
      {/*  footer end */}


    </div>
  );
}
export default App;
