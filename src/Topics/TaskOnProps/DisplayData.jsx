import React from "react";

const DisplayData = ({ data }) => {
    console.log(data);
    console.log(Object.keys(data[0]));
    
  return (
    <table border={1}>
      <tbody>
        <tr>
          {
            Object.keys(data[0]).map((ele,index)=>{
                return(
                    <th key={index}>{ele.toUpperCase()}</th>
                )
            })
          }
          <th>Action</th>
        </tr>

        {data.map((ele, index) => {
          return (
            <tr key={index}>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
              <td>{ele.age}</td>
              <td>
                <button>Take Action</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayData;
