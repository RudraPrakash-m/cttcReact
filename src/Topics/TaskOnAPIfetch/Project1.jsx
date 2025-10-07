import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";

const Project1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    console.log(data);

    setData(data);
    setLoading(true)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>{loading ? <Cards users={data} /> : <Loading />}</>;
};

export default Project1;
