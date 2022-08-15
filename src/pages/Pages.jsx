import React from 'react';
import Home from './Home';
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Show from "./Show";
import { Route, Routes,  } from 'react-router-dom';


function Pages() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/genre/:type" element={<Cuisine />} />
     <Route path="/searched/:search" element={<Searched/>} />
     <Route path="/show/:name" element={<Show/>} />
    </Routes>
  )
}

export default Pages