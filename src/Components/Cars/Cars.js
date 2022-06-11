import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Cars-SASS/CarsStyle.css';
import Footer from '../Footer/Footer';
import SlickCarousel from './Slick-Carousel/Carousel';

const Cars = () => {
    return (
        <>
            <div className="cars">
                {/* NavBar */}
                <NavBar />
                
                {/* SlickCarousel */}
                <SlickCarousel />
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Cars;