import './App.css';
import ProductCard from './components/Product/ProductCard';


const products = [
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Beauty Brush",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "image12",
    price: 30
  },
  {
    productName: "Makeup Kit",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "image10",
    price: 50
  },
];

function App() {
  return (
    <div className="App">
      {/* start our product */}
      <div className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <h1 className="product_taital">Our Products</h1>
            <p className="product_text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
          <div className="product_section_2 layout_padding">
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
              {products.map(product => (
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
    </div>
  );
}

export default App;
