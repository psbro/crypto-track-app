import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import './Carousel.css'
import { TrendingCoins } from './config/Api'


export const numberWithCommas = (x) =>{
         return (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

const Carousel = ({currency , symbol}) => {


       const curre = useContext(Crypto);


    const[trend,Uptrend] = useState([]);
    

    const trendingCoins = async () =>{
        const res = await axios.get(TrendingCoins(currency));
        Uptrend(res.data);
        console.log(res.data);
    };

    

    useEffect(()=>{
        trendingCoins();
    },[currency])

    const items = trend.map((coin)=>{
        let profit = coin.price_change_percentage_24h >=0;
        

        return(
            <Link
            className='carouselItem'
            to={`/coins/${coin.id}`}
            >
            <img src={coin.image} alt={coin.name} height="80" style={{marginBottom: 10}} />
            <span>
                {coin.symbol}
                &nbsp;
                <span
                style={{
                    color: profit > 0 ? "rgb(14,203,129)" : "red",
                    fontWeight: 500,
                }}
                >
                {profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
            </span>

            <span style={{fontSize: 22,fontWeight: 500}}>
               {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
            </span>
            </Link>
        );
    });

    const responsive = {
       0:{
           items: 2,
       },

       512:{
        items: 3,
    },
    };
    return (
        <div className='carousel'>
            <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}

            />
        </div>
    )
}

export default Carousel