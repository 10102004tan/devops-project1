import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({products}) => {
    return (
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
                productName={product.name.substring(0,50)}
                description={product.description}
                imageUrl={product.thumbnail_url}
                price={product.price}
              />
              ))}
            </div>
            <div className="seemore_bt mb-3">
              <a href="#">See More</a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ProductList