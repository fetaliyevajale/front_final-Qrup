import React from 'react'
import HeroServices from './HeroServices'
import Estate from './Estate'
import VarLet from './VarLet'
export default function Services() {
  return (
    <div className='container'>
<div className="heroServices">

 <h2>Our Services</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    
</div>
<div className="step">

<h3>Featured Services</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<HeroServices/>

<div className='styled'>
    <img src="/imagesFile/photo.jpg" alt="" />
</div>

<Estate/>

<div className="step">

<h3>FOur Providers</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>


<div className="logoServices">
<img src="/imagesFile/Frame.jpg" alt="" />
<img src="/imagesFile/Frame (1).jpg" alt="" />
<img src="/imagesFile/Frame (2).jpg" alt="" />
<img src="/imagesFile/Frame (3).jpg" alt="" />
</div>

<VarLet/>











 </div>
  )
}
