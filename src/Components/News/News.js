import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './News-SASS/NewsStyle.css'
import NewsApi from './NewsApi';

const News = () => {
    return (
        <>
            <div className="full-news">
                {/* NavBar */}
                <NavBar />


                <div className="all-news">
                    <h3>News</h3>
                    <p>Stay informed and read the latest automotive news, reviews and tutorials.</p>
                    {NewsApi.map((curElm, ind) => {
                        return (
                            <div className="news-1" key={ind}>
                                <div className="img-1">
                                    <img src={curElm.img} alt="" />
                                </div>
                                <div className="news-writing-1">
                                    <h4>{curElm.head}</h4>
                                    <span>{curElm.date}</span>
                                    <p>{curElm.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </>
    )
}

export default News;