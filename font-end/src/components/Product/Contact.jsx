import React from 'react';

export default function Contact() {
 
    return (
        <> 
            {/* contact section start */}
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="contact_taital">Get In Touch</h1>
                            <p className="contact_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_main">
                                <div className="contact_bt"><a href="#">Contact Form</a></div>
                                <div className="newletter_bt"><a href="#">Newletter</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map_main">
                    <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4749789205875!2d106.75548917480613!3d10.851432489301933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752797e321f8e9%3A0xb3ff69197b10ec4f!2zVHLGsOG7nW5nIGNhbyDEkeG6s25nIEPDtG5nIG5naOG7hyBUaOG7pyDEkOG7qWM!5e0!3m2!1svi!2s!4v1711769538703!5m2!1svi!2s" width="600" height="450" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
                    </div>
                </div>
            </div>
            {/* contact section end */}
        </>

    )
}