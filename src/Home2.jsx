import React from 'react';
import Banner from './Banner'
import CoinTable from './CoinTable';

export const Home2 = ({curr,symbol}) => {
  return (
    <>
    <Banner currency = {curr} symbol = {symbol}/>
    <CoinTable currency = {curr} symbol = {symbol}/>
    </>
  )
}

 export default Home2;