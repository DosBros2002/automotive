import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home-SASS/HomeStyle.css';
import Footer from '../Footer/Footer';
import BrandImgApi from './BrandImgApi';
import Slider from './Slider/Slider';
import ClientBenefitApi from './ClientBenefitApi';
import Carousel from './Slick-Carousel/Carousel';
import Claint from './Image/client.jpg';
import News1 from './Image/news1.jpg';
import News2 from './Image/news2.jpg';
import News3 from './Image/news3.jpg';
import Car from './Image/car.png';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <NavBar />

                {/* Slider */}
                <Slider />

                {/* client benefit */}
                <div className="home-parent-1 row">

                    {ClientBenefitApi.map((curElm, index) => {
                        return (
                            <div className="client-benefit col-lg-4 col-md-6 col-sm-12" key={index}>
                                <img src={curElm.img} alt="img" />
                                <h5>{curElm.h5}</h5>
                                <p>{curElm.p}</p>
                            </div>
                        )
                    })}


                </div>

                {/* popular-brand */}
                <div className="home-parent-2 row">
                    <div className="popular-brand col-lg-4 col-md-6 col-sm-12">
                        <h2>Popular brands</h2>
                        <p>Search from popular car brands of our dealership. This list is made from sale statistics at our dealership. <br /><br /><br /> International brand ranking and most visited cars in our live site, vote for the brand of this year and at the end of 2018 we will publish it on the magazine. International brand ranking and most visited cars in our live site, vote for the brand of this year and at the end of 2018 we will publish it on the magazine. <br /><br />Search from popular car brands of our dealership. This list is made from sale statistics at our dealership, International brand ranking and most visited cars in our live site, vote for the brand of this year and at the end of 2018 we will publish it on the magazine. International brand ranking and most visited cars in our live site, vote for the brand of this year and at the end of 2018 we will publish it on the magazine. </p>
                    </div>
                    <div className="brand-img col-lg-8 col-md-6 col-sm-12 row">
                        {BrandImgApi.map((curElm, index) => {
                            return (
                                <div className='img-p col-lg-3 col-md-6 col-sm-12'>
                                    <img src={curElm.img} alt="PopularBand" key={index} />
                                    <p>{curElm.p}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Carousel */}
                <div className="">
                    <Carousel />
                </div>

                {/* car */}
                <div className="car row g-5">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <h1>The future is Electric</h1>
                        <p>The BMW i8 is an icon of progress, marking an extraordinary evolution of The Ultimate Driving Machine.® As an innovative plug-in hybrid, it uses eDrive technology to combine the efficiency of an all-electric motor and the power of a TwinPower Turbo engine for an exhilarating driving experience that's every bit BMW.</p>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 car-img">
                        <img src={Car} alt="" />
                    </div>
                </div>

                {/* News of autoindustry */}
                <div className="news-container">
                    <h2>News of autoindustry</h2>
                    <p>Stay informed and read the latest Bismillah Motors news.</p>
                    <div className="news">
                        <div className="all-news row">
                            <div className="news-card col-lg-3 col-md-6 col-sm-12">
                                <img src={News1} alt="News1" />
                                <p>JANUARY 11, 2024</p>
                                <h5><a href="#">How to Choose the Right Car for You</a></h5>
                            </div>
                            <div className="news-card col-lg-3 col-md-6 col-sm-12">
                                <img src={News2} alt="News2" />
                                <p>JANUARY 4, 2023</p>
                                <h5><a href="#">Use This Decision to Get Your Tires Right This Winter</a></h5>
                            </div>
                            <div className="news-card col-lg-3 col-md-6 col-sm-12">
                                <img src={News3} alt="News3" />
                                <p>JANUARY 1, 2024</p>
                                <h5><a href="#">Buy a golf GTi today</a></h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="reviews row g-5">
                    <div className="firstreview col-lg-3 ">
                        <h2>Reviews</h2>
                        <p>Customers reviewing their experience with our company.</p>
                    </div>
                    <div className="secondreview row col-lg-9 ">
                        <div className="img col-lg-3">
                            <img src={Claint} alt="Claint" />
                        </div>
                        <div className="col-lg-9">
                            <h3>Loving the car, professional car dealer!</h3>
                            <p>No matter where you go, the car is the coolest, most happening thing around! Absolutely wonderful! The car is the most valuable business resource we have EVER purchased.</p>
                            <span>Abdullah — really happy with his <a href="#">Honda Civic</a></span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Home;