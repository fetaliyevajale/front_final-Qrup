import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="heroBlogs">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="centerContact">
        <div className="leftContact">
          <div className="links">
            <h6>Get in Touch</h6>
            <div className="conts">
              <i className="fa-solid fa-location-dot"></i>
              <span>
                123 Anywhere Street, Any <br />
                City, 12345 ST, Indonesia
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
            <div className="alt">
              <img src="/imagesFile/photo1.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="rightContact">
          <div className="top">
            <h3>Have a Question? Request a Visit? or Request a Quote? Don’t be Shy to Message Us!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>

          <div className="formRight">
            <form action="" method="post">
              <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" placeholder="Your full name" />
              
                <label htmlFor="email">Your Email</label> 
                <input type="email" name="email" id="email" placeholder="example@email.com" />
              </div>

              <div className="form-control">
                <label htmlFor="phone">Your Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="+123-456-7890" />
              
                <label htmlFor="subject">Your Subject</label> 
                <select id="subject" name="select">
                  <option value="general" >Question</option>
                  <option value="visit"></option>
                  <option value="quote"></option>
                  <option value="support"></option>
                </select>
              </div>

             
            </form>


            <form action="" method="post">

            <div className="form-control">
                <label htmlFor="w3review">Your Message</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Type Here"></textarea>
              </div>

            </form>
          </div>

          <button type="submit">Send Message</button>
        </div>
      </div>
    </div>
  );
}
