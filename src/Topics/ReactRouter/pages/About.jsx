import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState()

  useEffect(()=>{
    setFilterData(data)
  },[data])

  const fData = async () => {
    const { data } = await axios.get("https://api.github.com/users");
    setData(data);
    setLoading(true);
  };
  

  const handleForm=(e)=>{
    e.preventDefault()
  }

  const handleInput=(e)=>{
    const {name, value} = e.target
    // console.log(value);

    const fData = data.filter((ele)=>ele.login.toLowerCase().includes(value.toLowerCase()))
    // console.log(fData);
    
    setFilterData(fData)


    
  }

  // console.log(filterData);

  useEffect(() => {
    fData();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <form action="" onSubmit={handleForm}>
            <input
              type="text"
              className="searchName"
              placeholder="Search Name"
              onChange={handleInput}
            />

            <select name="" id="" className="searchName" onChange={handleInput}>
              <option value="">-- Users --</option>
              {
                data.map((ele)=>{
                  return(
                    <option value={ele.login}>{ele.login}</option>
                  )
                })
              }
            </select>
          </form>
          <div className="card-container">
            {filterData.map((ele, index) => {
              return <Card key={index} users={ele} />;
            })}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
