import React from 'react'
import Cards from './Cards'

const Items = () => {
  return (
    <div className='item_container'>
      <Cards items={{movie:"dabang",time:"2pm"}}/>
      <Cards items={{movie:"krish",time:"9am"}}/>
      <Cards items={{movie:"theri",time:"11pm"}}/>
      <Cards items={{movie:"don",time:"5pm"}}/>
      <Cards items={{movie:"hero",time:"1pm"}}/>
    </div>
  )
}

export default Items