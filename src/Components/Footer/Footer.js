import React from "react";
import "./Footer-SASS/Style.css";
import BtoT from './BackToTop/BackToTop';
import FooterLogo from './Image/logo-white.png';


const Footer = () => {
    return (
        <>
            <div className="full-footer">
                <BtoT />
                <div className="footer row pt-5 mt-5">
                    <div className="firstFooter col-lg-5">
                        <img src={FooterLogo} alt="FooterLogo" />
                        <p className="firstFooter-p">AutoMotive LLC is the largest and most trusted car dealership within London area, delivering the latest car brands worldwide with the best deals. Come and pay us a visit during these hours:</p>
                        <h6>WORKING HOURS</h6>
                        <div className="row">
                            <p className="col-lg-5 monday">Monday - Saturday</p>
                            <span className="col-lg-5 time">08:30 - 19:00</span>
                            <hr />
                        </div>
                        
                        <div className="row">
                            <p className="col-lg-5 sunday">Sunday</p>
                            <span className="col-lg-5 close">CLOSED</span>
                            <hr />
                        </div>

                    </div>
                    <div className="secondFooter col-lg-5 m-1 row">
                        <div className="col-lg-5 services">
                            <h2>SERVICES</h2>
                            <p><a href="#">Insurance</a></p>
                            <p><a href="#">Car Loans</a></p>
                            <p><a href="#">Custom plates</a></p>
                        </div>
                        <div className="col-lg-5 links">
                            <h2>CAR LINKS</h2>
                            <p><a href="#">Buy a car</a></p>
                            <p><a href="#">Sell yours</a></p>
                            <p><a href="#">Road assistance</a></p>
                        </div>
                        <div className="col-lg-5 segments">
                            <h2>SEGMENTS</h2>
                            <p><a href="#">SUV</a></p>
                            <p><a href="#">Hybrid-Electric</a></p>
                            <p><a href="#">Sedan</a></p>
                        </div>
                        <div className="col-lg-5 info">
                            <h2>USEFUL INFO</h2>
                            <p><a href="#">Contact</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="#">Terms of Service</a></p>
                        </div>
                    </div>
                </div>
                <div className="lasstFooter">
                    <span>Copyright ©2022 All rights reserved | This template is made with by 💖<a href="https://shsazib.netlify.app/" target="_blank"> SH Sazib</a></span>
                </div>
            </div>

        </>
    )
}

export default Footer;