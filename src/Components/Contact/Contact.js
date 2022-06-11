import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Contact-SASS/ContactStyle.css';
import Footer from '../Footer/Footer';
import { ImLocation2 } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { BsBookmarkCheck } from 'react-icons/bs';

const Contact = () => {
    return (
        <>
            <div className="contact">
                {/* NavBar */}
                <NavBar />

                {/* map */}
                <div className="map">
                    {/* <h1>Hello</h1> */}
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7297.072450235397!2d90.37692547230861!3d23.87059694925907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40fb857cb01%3A0xb6ca60a98b4c89e2!2sUttara%2012%20No.%20Sector%20park!5e0!3m2!1sen!2sbd!4v1644919646448!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                </div>
                {/* Location */}
                <div className="location">
                    <div className="located">
                        <div className="located-icon icon">
                            <ImLocation2 />
                        </div>
                        <div className="one-located">
                            <h4>1 — Get located</h4>
                            <p>Search our directories and find the car of your dreams for a great deal.</p>
                        </div>
                    </div>
                    <div className="findcar">
                        <div className="findcar-icon icon">
                            <AiFillCar />
                        </div>
                        <div className="two-findcar">
                            <h4>2 — Find car</h4>
                            <p>Search our directories and find the car of your dreams for a great deal.</p>
                        </div>
                    </div>
                    <div className="deal">
                        <div className="deal-icon icon">
                            < BsBookmarkCheck />
                        </div>
                        <div className="three-deal">
                            <h4>3 — Complete your deal!</h4>
                            <p>Search our directories and find the car of your dreams for a great deal.</p>
                        </div>
                    </div>
                </div>
                {/* Contact */}
                <div className="contactus">
                    <div className="all-input">
                        <h3>Contact Us</h3>
                        <p>Sign a partnership with us, drop us a letter.</p>
                        <div className="input">
                            <input type="text" placeholder='Name:' />
                            <input type="text" placeholder='Email:' />
                            <input type="text" placeholder='Subject:' />
                            <textarea className="" placeholder='Message:'></textarea>
                        </div>
                    </div>
                    <div className="officeAddress">
                        <h3>Offices</h3>
                        <p>Visit our offices, or call us.</p>
                        <div className="address">
                            <h6>Address:</h6>
                            <p>Kalium Automotive
                                44-45 Hythe Rd,
                                White City,
                                London NW10 6RS,
                                United Kingdom</p>
                        </div>
                        <div className="phone">
                            <h6>Phone:</h6>
                            <p>+88 01827 892939 <br /> +88 01609 992652</p>
                            
                        </div>
                        <div className="email">
                            <h6>E-mail:</h6>
                            <p>shsazibbhuiyan892939@gmail.com</p>
                        </div>
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </>
    )
}

export default Contact;