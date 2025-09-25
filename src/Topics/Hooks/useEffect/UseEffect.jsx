import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(data);

  const fetchData = async () => {
    const { data } = await axios.get("https://api.github.com/users");
    // console.log(data);
    setData(data);
    setLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>{!loading ? <Loading /> : <Cards users={data} />}</>;
};

export default UseEffect;
