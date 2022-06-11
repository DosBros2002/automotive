import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Service-SASS/ServiceStyle.css'
import Footer from '../Footer/Footer';
import ServicesApi from './ServicesApi';

const Service = () => {
    return (
        <>
            <div className="service">
                {/* NavBar */}
                <NavBar />

                <div className="service-container">
                    <div className="service-headar">
                        <h3>Service</h3>
                        <p>We also offer other services for your car. Small its shy way had woody downs power. <br />
                            To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at.</p>
                    </div>
                    <div className="all-service-card row">
                        {ServicesApi.map((curElm, ind) => {
                            return (
                                <div className="service-card row col-lg-6 col-md-6 col-sm-12" key={ind}>
                                    <div className="service-writing col-lg-6 col-md-12 col-sm-12">
                                        <h4>{curElm.head}</h4>
                                        <p>{curElm.desc}</p>
                                        <ul>
                                            <li>{curElm.li1}</li>
                                            <li>{curElm.li2}</li>
                                            <li>{curElm.li3}</li>
                                            
                                        </ul>
                                    </div>
                                    <div className="service-img col-lg-6 col-md-12 col-sm-12">
                                        <img src={curElm.img} alt="" />
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </>
    )
}

export default Service;