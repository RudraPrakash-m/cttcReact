import React, { useState } from 'react'
import Movie from './Movie'
import Time from './Time'

const Cards = ({items}) => {

  const [movieName, setMovieName] = useState(items.movie)

  const change=()=>{
    setMovieName("koi mil gaya")
  }
  
  return (
    <div className='each_card'>
      <Movie name={movieName}/>
      <Time time={items.time}/>
      <button onClick={change}>change</button>
    </div>
  )
}

export default Cards