import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Hero from "./Hero";
import Section from "./Section";
import Vision from "./Vision";
import Visits from "./Visits";
import Choose from "./Choose";
import Box from "./Box";
import Movie from "./Movie"
export default function Home() {
  return (
    <div className="container">
<Hero/>
<Section/>
<div className="lorem">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button><Link style={{color:'black'}}  to="/listing">See More</Link></button>
      </div>
<Vision/>
<div className="step">
<h3>Easy Step to Buy Property <br /> on Dhalem Real Estate</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<Visits/>
<div className="lorem">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button><Link style={{color:'black'}}  to="/listing">See Our FAQ</Link></button>
      </div>

<Choose/>
<div className="step">
<h3>What Says from Our Happy <br /> Customers</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
</div>

<Box/>
<Movie/>

    </div>
  );
}
