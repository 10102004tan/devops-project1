import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/Product/ProductCard";
import About from "./components/Product/About";
import Contact from "./components/Product/Contact";
import Footer from "./components/Product/Footer";
import Banner from "./components/Product/Banner";
import Customer from "./components/Product/Customer";

const products = [
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30,
  },
  {
    productName: "Makeup Kit",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.",
    imageUrl: "image10",
    price: 50,
  },
];

function App() {
  // CUSTOMER**********************************************************************
  const [customes, setCustomes] = useState([]);
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
  const [isShowMenu, setIsShowMenu] = useState(false);
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
      <div className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <h1 className="product_taital">Our Products</h1>
            <p className="product_text">
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="product_section_2 layout_padding">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
              {products.map((product) => (
                <ProductCard
                  productName={product.productName}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  price={product.price}
                />
              ))}
            </div>
            <div className="seemore_bt">
              <a href="#">See More</a>
            </div>
          </div>
        </div>
      </div>
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
