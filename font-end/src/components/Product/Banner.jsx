import React from 'react'
export default function Banner(props) {
    const title = props.title;
    const description = props.description;

    return (

        <div className="banner_section layout_padding">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="banner_taital">{title}</h1>
                                    <p className="banner_text">{description}</p>
                                    <div className="read_bt"><a class="btn-buy-now" href="#">Buy Now</a></div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="banner_img"><img className="img-fluid" src="images/banner-img.png"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    );
}
