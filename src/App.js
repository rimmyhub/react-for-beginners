import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      // json 코인을 얻었을때 json의 값을 setCoins해줘, setLoading값은 false로 바꿔줘
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // map을 사용하면 react.js는 element에 key를 주도록 함
  // 여기서는 api가 id를 가지고 있으니 이걸 key로 쓰면 됨
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading ...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
