const useFetchData = () => {
  const cryptoData = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const response = await data.json();
    console.log(response);
  };
  cryptoData();
};

export default useFetchData
