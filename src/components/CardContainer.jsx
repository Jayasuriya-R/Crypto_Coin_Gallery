import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ThreeDot ,OrbitProgress} from "react-loading-indicators";

const CardContainer = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const cryptoData = async () => {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`
      );
      const response = await data.json();
      console.log(response);
      setCard((prev) => [...prev, ...response]);
      setLoading(false);
    };
    cryptoData();
  }, [page]);

  const handleScroll = () => {
    console.log(window.document.documentElement.scrollHeight);
    console.log(document.documentElement.scrollTop);
    console.log(window.innerHeight);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      window.document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex justify-around items-center flex-wrap">
  {card.length === 0 ? (
    <ThreeDot color="#e1bc78" size="medium" text="" textColor="" />
  ) : (
    <>
      {card.map((x) => (
        <React.Fragment key={x.id}>
          <Card data={x} />
        </React.Fragment>
      ))}
      {loading && (
        <div className="w-full flex justify-center my-4">
          <OrbitProgress color="#e1bc78" size="medium" text="" textColor="" />
        </div>
      )}
    </>
  )}
</div>

  );
};

export default CardContainer;
