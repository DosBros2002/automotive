import React, { Component } from 'react';
import CarouselApi from './CarouselApi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselStyle.css';

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="all-carousel-item">
                <div className="full-carousel row">
                    <h2>Best car deals</h2>
                    <p>Short selection of our bestsellers and most loved cars.</p>
                    {CarouselApi.map((curElm) => {
                        return (
                            <>
                                <div className='carousel col-lg-3 col-md-6 col-sm-12 m-4'>
                                    <Slider {...settings}>
                                        <img className='img' src={curElm.img1} alt="img" />
                                        <img className='img' src={curElm.img2} alt="img" />
                                        <img className='img' src={curElm.img3} alt="img" />
                                        <img className='img' src={curElm.img4} alt="img" />

                                    </Slider>
                                    <div className='carousel-3'>
                                        <h3>{curElm.h3}</h3>
                                        <br />
                                        <span>{curElm.price}</span>
                                        <p>{curElm.p}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        );
    }
}