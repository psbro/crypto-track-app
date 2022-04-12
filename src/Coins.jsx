// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Coins.css'
// import { SingleCoin } from './config/Api';
// import axios from 'axios';

// import CoinInfo from './CoinInfo';
// import { numberWithCommas } from './Carousel';
// import { CurrencyExchange } from '@mui/icons-material';
// import { LinearProgress } from '@mui/material';

// const Coins = () => {
//   const { id } = useParams();
//   console.log(id);

//   const [coin, Setcoin] = useState();

//   const fetchCoin = async () => {
    
//     const { data } = await axios.get(SingleCoin(id));
//     Setcoin(data);
    
    
//   }

//   console.log(coin)
  
  



//   let currency = "USD";

//   if (!coin) {
//     <LinearProgress style={{ backgroundColor: "gold" }} />
//   }



//   useEffect(() => {
//     fetchCoin();
//   }, []);




//   return (
//     <div className='container1'>


//       <div className="sidebar">
//         <img src={coin?.image.large} alt={coin?.name} height="200" />
//         <h3 className="heading">
//           {coin?.name}
//         </h3>
//         <div className="market_data">
//           <span style={{ display: "flex" }}>
//             <h5 className="heading">
//               Rank: <span className='rank'>{coin?.market_cap_rank}</span>
//             </h5>
//           </span>

//           <span style={{ display: "flex" }}>
//             <h5 className="heading">
//               Current Price: <span className='rank'>{"$"}{" "} {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])} </span>
//             </h5>
//           </span>

//           <span style={{ display: "flex" }}>
//             <h5 className="heading">
//               Market cap: <span className='rank'> {"$"} {" "} {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M</span>
//             </h5>
//           </span>
//         </div>
//       </div>


     
//        <CoinInfo coin={coin} />
       

      
//     </div>


//   )
// }

// export default Coins;
