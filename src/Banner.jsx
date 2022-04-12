import React from 'react';
import './Banner.css';
import Carousel from './Carousel';

const Banner = ({currency,symbol}) => {
  return (
    <>
      <div className="banner">
          <div className="banner_content">
            <div className="tag_line">
             <h2>Crypto Hunter</h2>
             <p>Get all the information regarding your favorite Crypto Currencies </p>
            </div>
            <Carousel currency = {currency} symbol = {symbol}/>
          </div>
      </div>
    </>
  )
}

export default Banner
