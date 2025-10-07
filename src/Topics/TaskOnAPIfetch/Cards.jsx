import React, { useEffect, useState } from "react";

const Cards = ({ users }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (users && users.length > 0) {
      const sorted = [
        ...users.filter((item) => item.name.common === "India"),
        ...users.filter((item) => item.name.common !== "India"),
      ];
      setData(sorted);
    }
  }, [users]);

  return (
    <>
      {data.map(({ flags, name }, index) => (
        <div className="card" key={index}>
          <img src={flags.png} alt={flags.alt} />
          <div>
            <h2>{name.common}</h2>
            <h3>{name.official}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
