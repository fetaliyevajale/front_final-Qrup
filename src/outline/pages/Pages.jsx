import React from 'react'
import HeroPages from './HeroPages'
import Box from '../home/Box'
export default function Pages() {
  return (
    <div className='pagesContainer'>
            <div className="heroBlogs">
        <h2>Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>


      <HeroPages/>

      <div className="step">
        <h3>What Says from Our Happy Customers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Box/>
    </div>
  )
}
