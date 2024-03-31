import React from 'react'

export default function Customer (props) {
    const name = props.title || "no name";
    const detail = props.detail ||"no comment";
    const image = props.image ||"image/client-img.png";
    let index =props.index;
    if(index==0){
        return (
            <>
                {/* customer section start */}
               
                                <div className="carousel-item active">
                                    <div className="client_section_2">
                                        <div className="client_main">
                                            <div className="client_left">
                                                <div className="client_img"><img src={image} alt="client"/></div>
                                            </div>
                                            <div className="client_right">
                                                <h3 className="name_text">{name}</h3>
                                                <p className="dolor_text">{detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                {/* customer section end */}
    
    
                </>
        )
    }
    else{
        return (
            <>
                {/* customer section start */}
               
                                <div className="carousel-item">
                                    <div className="client_section_2">
                                        <div className="client_main">
                                            <div className="client_left">
                                                <div className="client_img"><img src={image} alt="client"/></div>
                                            </div>
                                            <div className="client_right">
                                                <h3 className="name_text">{name}</h3>
                                                <p className="dolor_text">{detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                {/* customer section end */}
    
    
                </>
        )
}
}
