import React from 'react'
export default function Banner({title, description, image, active}) {
    return (
        <div className={"carousel-item " + active}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="banner_taital">{title}</h1>
                        <p className="banner_text">{description}</p>
                        <div className="read_bt"><a class="btn-buy-now" href="#">Buy Now</a></div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner_img"><img className="img-fluid" src={image} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}