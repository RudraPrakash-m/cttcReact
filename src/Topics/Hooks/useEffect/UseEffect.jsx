import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data)
  const [loading, setLoading] = useState(false);
    // console.log(data);
    console.log(filterData);
    


  const fetchData = async () => {
    const { data } = await axios.get("https://api.github.com/users");
    // console.log(data);
    setData(data);
    setLoading(true);
  };

  const handleForm=(e)=>{
    e.preventDefault()
  }

  const handleInput=(e)=>{
    const {name, value} = e.target

    // console.log(value);
    

    let filterdata = filterData.filter((user)=> user.login.includes(value))
    // console.log(filterdata);

    setFilterData(filterdata)
    

  }


  useEffect(()=>{
    setFilterData(data)
  },[data])

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search">
        <form action="" onSubmit={handleForm}>
          <input type="text" name="search" id="" placeholder="search" onChange={handleInput} />
        </form>
      </div>
      {!loading ? <Loading /> : <Cards users={filterData} />}
    </>
  );
};

export default UseEffect;
