import React, { Component } from "react";
import BackToTop from 'react-back-to-top-button';
import { HiOutlineArrowUp } from 'react-icons/hi';
import './BackToTopStyle.css';



export default class BtoT extends Component {
    render() {
      return (
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={1500}
          easing="easeInOutQuint"
        >
          <span className="topicon"><HiOutlineArrowUp /></span>
        </BackToTop>
      );
    }
  }