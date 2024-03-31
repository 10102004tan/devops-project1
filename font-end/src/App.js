import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/Product/ProductCard";
import About from "./components/Product/About";
import Contact from "./components/Product/Contact";
import Footer from "./components/Product/Footer";
import Banner from "./components/Product/Banner";
import Customer from "./components/Product/Customer";


function App() {

  const [customes, setCustomes] = useState([]);
  const [banners,setBanners] = useState([])
  const [products,setProducts] = useState([])
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3003/banners")
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
  useEffect(() =>{
    fetch("https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=76570098-dd66-90d6-7bde-9c9ba5b25f4c&category=1882&page=2&urlKey=dien-gia-dung")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setProducts(data['data'])
    })
    .catch((error) =>{
      console.error('Error fetching data:', error);
    })
  },[])
    // CUSTOMER**********************************************************************
  let index = 0;
  // React Hook
  useEffect(() => {
    fetch("http://localhost:3003/contacts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCustomes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // CUSTOMER**********************************************************************
  return (
    <div className="App">
      {/* Header */}
      <Header isShow={isShowMenu} setIsShowMenu={setIsShowMenu} />

      <Banner
        title={
          <>
            Guicci <br />
            Kit
          </>
        }
        description={
          "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles."
        }
      />

      {/* start our product */}
      <ProductList products={products} />
      {/* end our product */}
      {/* about section start */}
      <About />
      {/* about section end */}
      {/*about section start*/}

      {/* COSTUMER********************************************************************************* */}
      <div className="customer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="customer_taital">What says customers</h1>
            </div>
          </div>
          <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {customes.map((custome) => {
              return (
                <Customer
                  title={custome.title}
                  detail={custome.detail}
                  image={custome.image}
                  index={index++}
                />
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#main_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
      </div>

      <Contact />
 {/* COSTUMER********************************************************************************* */}
      {/*end*/}
      {/*  footer start */}
      <Footer />
      {/*  footer end */}
    </div>
  );
}
export default App;
