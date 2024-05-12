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
                            <p>22 No. Chungi , Adyala Road , Rawalpindi </p>
                        </div>
                        <div className="phone">
                            <h6>Phone:</h6>
                            <p>033353333 <br /> 03322445533</p>
                            
                        </div>
                        <div className="email">
                            <h6>E-mail:</h6>
                            <p>i202411@nu.edu.pk</p>
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
