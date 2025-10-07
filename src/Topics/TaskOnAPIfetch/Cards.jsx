import React, { useEffect, useState } from "react";

const Cards = ({ users }) => {
  const [user, setUser] = useState([]);
  const [filterData, setFilterData] = useState(user)
  const [value, setValue] = useState("")

  useEffect(() => {
    setUser(users);
    setFilterData(users)
  }, []);

  const handleForm = (e) => {
    e.preventDefault()
  };

  const handleInput = (e) => {
  const { name, value } = e.target;

  setValue(value)

  const fData = user.filter(({name:{common}}) =>
    common.toLowerCase().includes(value.toLowerCase())
  );

  console.log(fData);
  setFilterData(fData);
};


  return (
    <>
      <div className="search">
        <form action="" onSubmit={handleForm}>
          <input type="text" name="search" id="" placeholder="Search Country Name" onChange={handleInput} />
          {value===""?"":(
            <>
            <h4>You are searching for : <strong>{value}</strong></h4>
            <br />
            <h5>Results: </h5> 
            </>
          )}
        </form>
      </div>
      {filterData.map(({ flags, name }, index) => (
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
