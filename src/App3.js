import React , {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App3.css'
import Header from "./Header"
import Home2 from './Home2';
import Coins from './Coins';
import { makeStyles } from '@mui/styles'


const App3 = () => {

  const useStyles = makeStyles(()=>({
    App3: {
      backgroundColor : "#14161a",
      color : "white",
      minHeight: "100vh",
    }
  }))

  const[curr,setCurr] = useState("USD");
  const [symbol,setsymbol] = useState("$");

  const classes= useStyles();
  return (
    <div className={classes.App3}>
    <Header curr = {curr} setCurr = {setCurr} symbol = {symbol} setsymbol = {setsymbol}/>
    <Routes>
      <Route exact path='/' element={<Home2 curr={curr} symbol = {symbol}/>}/>
      {/* <Route  path='/Coins/:id' element={<Coins/>}/> */}
    </Routes>
    </div>
  )
}

export default App3;
