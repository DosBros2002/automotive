import React from 'react';
import './SearchBarStyle.css';
import Time from './Time/Time'
import { SiFacebook } from 'react-icons/si';
import { AiFillYoutube, AiFillInstagram, AiFillCar, AiOutlineSearch } from 'react-icons/ai';
import moment from "moment";

const SearchBar = () => {

    return (
        <>
            <div className="full-search-bar">
                <div className="search-bar">
                    <div className="phone-time">
                        {moment().format('MMMM Do YYYY')}
                        <Time/>
                        <span>+8801827-892939</span>
                        <span>MON - SAT 8:30 - 19:00</span>
                    </div>
                    <div className="search-icon">
                        <div className='socile-icon'>
                            <a href="#"><SiFacebook className='icon' /></a>
                            <a href="#"><AiFillYoutube className='icon' /></a>
                            <a href="#"><AiFillInstagram className='icon' /></a>
                            <a href="#"><AiFillCar className='icon' /></a>
                        </div>

                        <input type="search" placeholder='SEARCH SITE...' />
                        <AiOutlineSearch className='input-search' />


                    </div>
                </div>
            </div>


        </>
    )
}

export default SearchBar;