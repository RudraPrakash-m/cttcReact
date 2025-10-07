import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Project1 = () => {
    const [data, setData] = useState([])

    const fetchData= async()=>{
        const {data} = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
        // console.log(data);
        
        setData(data)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <Cards users={data}/>
  )
}

export default Project1