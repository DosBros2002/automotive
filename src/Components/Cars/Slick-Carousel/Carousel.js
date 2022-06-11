import React, { useState } from 'react';
import CarouselApi from './CarouselApi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselStyle.css';

const Carousel = () => {
    const [query, setQuery] = useState("");

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
                <h2>Find Your Best Car</h2>
                <p>Short selection of our bestsellers and most loved cars.</p>
                <div className="input">
                    <input type="search" placeholder='Find Your Car!' className='search' onChange={e => setQuery(e.target.value)} />
                </div>
                {CarouselApi.filter(curElm => curElm.h3.toLowerCase().includes(query)).map((curElm, ind) => {
                    return (
                        <>
                            <div className='carousel col-lg-3 col-md-6 col-sm-12 m-4' key={ind}>
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



export default Carousel;