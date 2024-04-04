import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/Product/ProductCard";
import About from './components/Product/About';
import Contact from './components/Product/Contact';
import Footer from './components/Product/Footer';
import Banner from './components/Product/Banner';

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

function App(props) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [banners, setBanners] = useState([]);
  // React Hook
  useEffect(() => {
    fetch("http://localhost:3009/banner").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setBanners(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <Header isShow={isShowMenu} setIsShowMenu={setIsShowMenu} />

      {/* Banner start */}
      <div className="banner_section layout_padding">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {
              banners.map((banner,index) => {
                return (<Banner key={index} active={(index == 1?"active":"")} title={banner.title} description={banner.description} image={banner.image}/>)
              })
            }
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* Banner end */}
      {/* start our product */}
      <div className="product_section layout_padding">
        <div className="container">
        <div className="read_bt"><a class="btn-buy-now" href="#">Buy Now</a></div>

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
      <Contact />
      {/*end*/}
      {/*  footer start */}
      <Footer />
      {/*  footer end */}
    </div>
  );
}

export default App;
