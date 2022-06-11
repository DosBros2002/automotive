import React from 'react';
import NavBar from '../NavBar/NavBar';
import './About-SASS/aboutStyle.css';
import Footer from '../Footer/Footer';

import CompanyImg from './Images/about-us-3.jpg';
import Team1 from './Images/team-1.jpg';
import Team2 from './Images/team-2.jpg';
import Team3 from './Images/team-3.jpg';
import Team4 from './Images/team-4.jpg';
import Claient from './Images/client.jpg';


const About = () => {
    return (
        <>
            <div className="aboutus">
                {/* NavBar*/}
                <NavBar />


                <div className="about-container">
                    <div className="about-head">
                        <h3>About Us</h3>
                        <p>Is at purse tried jokes china ready decay an. <br />
                            To denoting admitted speaking leaarning my exercise so in.</p>
                    </div>
                    <div className="company-deteles">
                        <div className="company row">
                            <div className="company-writing col-lg-6">
                                <h3>The company</h3>
                                <p>London’s best car dealership since 1985</p> <br />
                                <p>Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. <br /><br />
                                    Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too.
                                    Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose. <br /><br />
                                    Fertile beloved evident through no service elderly is.</p>
                            </div>
                            <div className="company-img col-lg-6">
                                <img src={CompanyImg} alt="CompanyImg" />
                            </div>
                        </div>

                        {/* team */}
                        <div className="team-member mt-5">
                            <h3>Team</h3>
                            <p>Company team profile and short bio.</p>
                            <div className="members row mt-5">
                                <div className="member row col-lg-6 col-md-6 col-sm-12 gx-5">
                                    <div className="member-img col-lg-3 gx-5">
                                        <img src={Team1} alt="Team1" />
                                    </div>
                                    <div className="member-writing col-lg-9 gx-5">
                                        <h5>Aaron Cartwright</h5>
                                        <p>Car Service Officer
                                            <br /><br />
                                            Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence dependent.</p>
                                    </div>
                                </div>
                                <div className="member row col-lg-6 col-md-6 col-sm-12 gx-5">
                                    <div className="member-img col-lg-3 gx-5">
                                        <img src={Team2} alt="Team2" />
                                    </div>
                                    <div className="member-writing col-lg-9 gx-5">
                                        <h5>Alexander Bentley</h5>
                                        <p>Chief Executive Officer
                                            <br /><br />
                                            Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="members row mt-4">
                                <div className="member row col-lg-6 col-md-6 col-sm-12 gx-5">
                                    <div className="member-img col-lg-3 gx-5">
                                        <img src={Team3} alt="Team1" />
                                    </div>
                                    <div className="member-writing col-lg-9 gx-5">
                                        <h5>Aaron Cartwright</h5>
                                        <p>Rent Sector Manager
                                            <br /><br />
                                            Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required.</p>
                                    </div>
                                </div>
                                <div className="member row col-lg-6 col-md-6 col-sm-12 gx-5">
                                    <div className="member-img col-lg-3 gx-5">
                                        <img src={Team4} alt="Team2" />
                                    </div>
                                    <div className="member-writing col-lg-9 gx-5">
                                        <h5>Shannon Hardy</h5>
                                        <p>General Manager
                                            <br /><br />
                                            Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence dependent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video */}
                <div className="aboutus-video">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/Bc2wD2ULB2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                {/* Reviews */}
                <div className="reviews row g-5">
                    <div className="firstreview col-lg-3 ">
                        <h2>Reviews</h2>
                        <p>Customers reviewing their experience with our company.</p>
                    </div>
                    <div className="secondreview row col-lg-9 ">
                        <div className="img col-lg-3">
                            <img src={Claient} alt="Claint" />
                        </div>
                        <div className="col-lg-9">
                            <h3>Loving the car, professional car dealer!</h3>
                            <p>No matter where you go, the car is the coolest, most happening thing around! Absolutely wonderful! The car is the most valuable business resource we have EVER purchased.</p>
                            <span>Brenda — really happy with her <a href="#">Renault Captur</a></span>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <Footer />
            </div>
        </>
    )
}

export default About;