import React from 'react'

const Iterator = () => {
    let data=[
        {
            name:"Rudra Prakash Mallick",
            age:21
        },
        {
            name:"Rajesh Kumar Sahoo",
            age:22
        },
        {
            name:"Devashish Sethy",
            age:21
        }
    ]
  return (
    <div>
        <ul>
        {
            data.map((ele, index)=>{
                return(
                    <li key={index}>{ele.name} - {ele.age} Age</li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Iterator