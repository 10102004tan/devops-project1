import React from 'react'
import image12 from '../Assets/images/img-12.png'
import image1 from '../Assets/images/img-1.png'
import image2 from '../Assets/images/img-2.png'
import image3 from '../Assets/images/img-3.png'
import image4 from '../Assets/images/img-4.png'
import image5 from '../Assets/images/img-5.png'
import image6 from '../Assets/images/img-6.png'
import image7 from '../Assets/images/img-7.png'
import image8 from '../Assets/images/img-8.png'
import image9 from '../Assets/images/img-9.png'
import image10 from'../Assets/images/img-10.png'
import image11 from '../Assets/images/img-11.png'

const ProductCard = ({ productName, description, imageUrl, price }) => {
    return (
        <div className='container'>
            <div className="product_box text-center rounded-[14px] overflow-hidden shadow">
            <h4 className="bursh_text">{productName}</h4>
            <p className="lorem_text">{description}</p>
            <img src={imageUrl} alt="" className='w-[100%] object-cover' />
                <div className="btn_main">
                    <div className="buy_bt">
                        <ul className='flex items-center'>
                            <li className="active"><a href="#">Buy Now</a></li>
                            <li><a href="#">Buy Now</a></li>
                        </ul>
                    </div>
                    <h3 className="price_text">Price {price}</h3>
                </div>
        </div>
        </div>
    )
}
export default ProductCard
