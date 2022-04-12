
import React, { createContext, useContext, useState } from "react";
import { CryptoState } from "./CryotoContext";

import './Header.css'


// const useStyles = makeStyles(() => ({
//   title: {
//     flex: 1,
//     color: "gold",
//     fontFamily: "Montserrat",
//     fontWeight: "bold",
//     cursor: "pointer"
//   }
// }))



const Header = ({curr,setCurr,symbol,setsymbol}) => {

  // const [{ currency, setCurrency}] = CryptoState();

  const inputE = (e) =>{
        setCurr(e.target.value);

        if (curr === "INR") setsymbol("$");
        else if (curr === "USD") setsymbol("₹");
  }
  
  console.log(symbol)
  return (
    <>
  
    <div className="header">
      <div className="box1">
         <p>Crypto tacker</p>
      </div>

      <div className="box2">
        <select value={curr} onChange ={inputE} >
          <option value={"INR"}>INR</option>
          <option value={"USD"}>USD</option>
        </select>
      </div>

    </div>
    
      
    </>
  )
}

export default Header;





