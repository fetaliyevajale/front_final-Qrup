import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route,Link,NavLink } from "react-router-dom";
import Home from './outline/home/Home';
import Listing from './outline/Listing';
import Services from './outline/Services';
import About from './outline/About';
import Contact from './outline/Contact';
import Pages from './outline/Pages';
import Fotter from './outline/home/Fotter';
// import Section from './outline/home/Section';

function App() {
  return (

    <div >
<div className='desktopPages'>
   <div className="headerImg">

   <img src="./Logo.png" alt="" />
   </div>

<div className="headers">
<header>
  <NavLink  style={{color:'black'}}  to="/">Home</NavLink>
  <NavLink style={{color:'black'}} to="/listing">Listing</NavLink>
  <NavLink style={{color:'black'}} to="/services">Services</NavLink>
  <NavLink style={{color:'black'}} to="/about">About</NavLink>
  <NavLink style={{color:'black'}} to="/contact">Contact Us</NavLink>
  
</header>
<i className="fa-solid fa-bars"></i>
<button>Get a Quote</button>

</div>

 

</div>

      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='listing' element={<Listing/>}/>
<Route path='services' element={<Services/>}/>
<Route path='about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/pages' element={<Pages/>}/>

</Routes>
    </div>



  );
}

export default App
