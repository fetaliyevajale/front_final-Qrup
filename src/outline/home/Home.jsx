import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Fotter from "./Fotter";
import Hero from "./Hero";
import Section from "./Section";
import Vision from "./Vision";
import Visits from "./Visits";
import Lorem from "./Lorem";
import Stemp from "./Stemp";
import Choose from "./Choose";
import Lorems from "./Lorems";
import Says from "./Says";
import Box from "./Box";
import Movie from "./Movie"
export default function Home() {
  return (
    <div className="container">
<Hero/>
<Section/>
<Lorem/>
<Vision/>
<Stemp/>
<Visits/>
<Lorems/>
<Choose/>
<Says/>
<Box/>
<Movie/>
<Fotter/>
    </div>
  );
}
