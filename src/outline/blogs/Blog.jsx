import React from 'react'
import LeftBlogs from './LeftBlogs';
import RightBlogs from './RightBlogs';
export default function Blog() {
  return (
    <div className='container'>

<div className="heroBlogs">

 <h2>Our Blog</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    
</div>


<div className="centerBlogs">

<LeftBlogs/>
<RightBlogs/>





</div>






    </div>
  )
}
