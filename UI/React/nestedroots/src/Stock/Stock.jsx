import React, { useState, useEffect } from "react";

const Stock = () => {
  const [stockData, setStockData] = useState([
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 178.45,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 2845.67,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 3452.13,
    },
  ]);

  const [thres, setThres] = useState({});

  // Wishlist
  const [wishlist, setWishlist] = useState([]);

  // Updating stock price every second
  useEffect(() => {
    const stockPriceUpdate = setInterval(() => {
      setStockData((prev) => {
      const update = prev.map(item => {
        const newPr = +(item.price + (Math.random() - 0.5) * 10).toFixed(2);
        const newThres = thres[item.symbol]
        if(newThres && newPr >= newThres){
          alert(`${item.symbol} has hit $${newThres}!`);
          setThres((prevThres) => {
            const updatedThres = { ...prevThres };
            delete updatedThres[item.symbol];
            return updatedThres;
          });
        }
        return {...item , price : newPr }
      })
      return update
    });
    }, 1000);
    return () => clearInterval(stockPriceUpdate);
  }, [thres]);

  const handleBuy = (stock) => {
    setWishlist((prev) => {
      const alreadyExists = prev.find((item) => item.symbol === stock.symbol);
      return alreadyExists ? prev : [...prev, stock];
    });
  };

  const handleSell = (stock) => {
    setWishlist((prev) => prev.filter((item) => item.symbol !== stock.symbol));
  };

  return (
    <>
      <h1>Stock</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {stockData.map((stock, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h2>{stock.symbol}</h2>
            <p>{stock.name}</p>
            <p>${stock.price.toFixed(2)}</p>
            <input
              type="number"
              placeholder="Set alert price"
              value={thres[stock.symbol] || ""}
              onChange={(e) =>
                setThres((prev) => ({
                  ...prev,
                  [stock.symbol]: Number(e.target.value),
                }))
              }
            />
            <button onClick={() => handleBuy(stock)}>Buy</button>
            <button onClick={() => handleSell(stock)}>Sell</button>
          </div>
        ))}
      </div>

      {wishlist.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2>Wishlist</h2>
          {wishlist.map((stock, index) => (
            <div
              key={index}
              style={{ border: "1px dashed #999", padding: "10px" }}
            >
              <h3>
                {stock.symbol} - {stock.name}
              </h3>
              <p>${stock.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Stock;
