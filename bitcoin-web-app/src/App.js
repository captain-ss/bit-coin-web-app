import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res?.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input
              className="coin-input"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
          {/* {console.log(filteredCoins)} */}
        </div>
        {filteredCoins.map((coin) => {
          return ( <>
             {console.log(coin)}
            <Coin
              key={coin?.index}
              name={coin?.name}
              image={coin?.image}
              volume={coin?.market_cap}
              price={coin?.current_price}
              symbol={coin?.symbol}
              priceChange={coin?.price_change_percentage_24h}
              marketCap={coin?.market_cap}
            />  </>
          );
        })}
       
      </div>
    </>
  );
}

export default App;
