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
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">search a currency</h1>
          <form>
            <input
              className="coin-input"
              placeholder="search"
              onChange={handleChange()}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
