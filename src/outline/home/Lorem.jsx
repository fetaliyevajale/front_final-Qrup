import React from 'react'
import { Link } from 'react-router-dom'; 
export default function Lorem() {
  return (
    <div>

<div className="lorem">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button><Link style={{color:'black'}}  to="/listing">See More</Link></button>
      </div>



    </div>
  )
}
