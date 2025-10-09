import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div className='service-page'>


      <div className="left-side">
        <ul>
          <Link className='service-link' to="/services"><li>Web Development</li></Link>
          <Link className='service-link' to="/services/con"><li>Consoltancy</li></Link>
          <Link className='service-link' to="/services/homeD"><li>Home Delivery</li></Link>
        </ul>
      </div>


      <div className="right-side">
        <Outlet/>
      </div>


    </div>
  )
}

export default Services