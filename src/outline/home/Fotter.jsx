import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="links">
          <img src="./Logo.png" alt="Logo" style={{ width: 100 }} />
          <div className="p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        <div className="links">
          <h6>Useful Links</h6>
          <div className="links-class">
            <Link to="/listing" style={{color:'black'}}>Listing</Link>
            <Link to="/about"  style={{color:'black'}}>About Us</Link>
            <Link to="/contact"  style={{color:'black'}}>Contact Us</Link>
            <Link to="/team"  style={{color:'black'}}>Our Team</Link> 
          </div>
        </div>

        <div className="links">
          <h6>Get in Touch</h6>
          <div className="conts">
          <i className="fa-solid fa-location-dot"></i>
<span>123 Anywhere Street, Any <br />City, 12345 ST, Indonesia
</span>
          </div>

<div className="contacts">
<i className="fa-solid fa-phone"></i>
<span>+123 456 7890</span>
</div>


<div className="contacts">
<i className="fa-solid fa-envelope"></i>
<span>hello@dhalem.com</span>
</div>
        </div>

        <div className="links">
          <h6>Newsletter</h6>

<form action="">
<input type="email" name="" id="" placeholder='Your Email'/>
<input type="submit" value="Submit"  />


</form>

        </div>
      </footer>
    </div>
  );
}
