


import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/Product/ProductCard";
import About from './components/Product/About';
import Contact from './components/Product/Contact';
import Footer from './components/Footer';


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
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
  
    <div className="App">
      {/* Header */}
      <Header isShow={isShowMenu} setIsShowMenu={setIsShowMenu} />
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
      <About/>
      {/* about section end */}
      {/*about section start*/}
     <Contact/>
     {/*end*/}
     {/*  footer start */}
     <Footer/>
     {/*  footer end */}

    </div>
   
  );
}

export default App;
