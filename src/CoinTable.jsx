import { Input, LinearProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, display } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import "./CoinTable.css"
import { CoinList } from './config/Api';
import { Link } from 'react-router-dom'
import { numberWithCommas } from './Carousel';

const CoinTable = (props) => {

  const [coins, Setcoins] = useState([]);
  const [newcoins, Setnewcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, Setsearch] = useState("");
  const [text, Settext] = useState();
  const [page, Setpage] = useState(1);

  const InputE = (e) => {
    Settext(e.target.value)
  }



  const fetchCoins = async () => {
    setloading(true);
    const res = await axios.get(CoinList(props.currency));
    setloading(false);
    Setcoins(res.data);
    Setnewcoins(res.data);
    

    



  }

  useEffect(() => {
    fetchCoins();
  }, [props.currency])



  const darkTheme = createTheme(({
    palette: {
      main: "#fff"
    },
    type: "dark",
  }));

  const handleSearch = (e) => {

    

    Setsearch(e.target.value)

    
    let newCoins =   coins.filter((coin) =>
       coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
     )

     Setnewcoins(newCoins)
     console.log(search)

     if(search === ""){
       Setnewcoins(coins);
     }
     
  }

  const useStyles = makeStyles(() => ({
       row:{
         backgroundColor: "#16171a",
         cursor: "pointer",
         "&:hover" : {
           backgroundColor: "#131111"
         },
         fontFamily: "Montserrat"
       },
        
       pagination:{
         "& .MuiPaginationItem-root" : {
           color: "gold"
         }
       },
  }))

  const classes = useStyles();



  return (
    <ThemeProvider theme={darkTheme}>
      <div className='table' style={{ textAlign: "center" }}>
        <h4>
          Cryotocurrency prices by market Cap
        </h4>
        <input type="text" id="input" placeholder='search crypto currency here...' value={text} onChange={handleSearch} />
        <TableContainer height="200">
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <>
              <Table>
                <TableHead style={{ backgroundColor: "gold" }}>
                  <TableRow>
                    {["Coin", "Price", "24h change", "Market cap"].map((head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Montserrat",
                        }}
                        key={head}
                        align={head === "Coin" ? "" : "right"}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody style={{ height: "50vw" }}>
                  
                
                  
                  {newcoins &&  newcoins.slice((page-1)*10 , (page-1)*10 + 10).map((row) => {
                    
                    const profit = row.price_change_percentage_24h > 0;
                    console.log(profit)
                    return (


                      <TableRow

                        className={classes.row}
                        key={row.name}
                      >

                        <TableCell component="th" scope="row"
                          styles={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <Link to={`/coins/${row.id}`}>
                            <img src={row.image} alt={row.name} height="50" style={{ marginBottom: 10 }} />
                            <div style={{ display: "flex", flexDirection: "column" }}
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                }}
                              >
                                {row.symbol}
                              </span>
                              <span style={{ color: "darkgray" }}>{row.name}</span>
                            </div>
                          </Link>

                        </TableCell>


                        <TableCell
                          align='right'>
                          <span style={{ color: "#fff" }}>
                            {props.symbol} {""}
                            {numberWithCommas(row.current_price.toFixed(2))}
                          </span>
                        </TableCell>

                        <TableCell
                          align='right'
                          style={{
                            color: profit > 0 ? "rgb(14,203,129)" : "red",
                            fontWeight: 500
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>

                        <TableCell align='right'>
                        <span style={{ color: "#fff" }}>
                           {props.symbol} {" "}
                           {numberWithCommas(
                             row.market_cap.toString().slice(0,-6)
                           )}
                             M
                           </span>
                        </TableCell>

                      </TableRow>


                    )
                  })}

          

          
                </TableBody>
              </Table>
            </>
          )}


        </TableContainer>
        <Pagination
        style = {{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}

        classes = {{ul: classes.pagination}}
        count = {(coins.length/10).toFixed(0)}
        onChange = {(_, value) => {
          Setpage(value);
          window.scroll(0,450);
        }}
        />
      </div>
    </ThemeProvider >
  )
}

export default CoinTable;