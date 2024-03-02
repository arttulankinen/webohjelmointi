import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import {Historia} from './sivut/Historia';
import {Pelivinkit} from './sivut/Pelivinkit';
import {Tapahtumat} from './sivut/Tapahtumat';
import {Pelitekniikka} from './sivut/Pelitekniikka';
import { Koti } from './sivut/Koti';


function App() {
  return (
    <Router>
    <div>
      <div id="header">
        <h1>
          <Link to="/"  id="otsikko">GamingGuides</Link>
          </h1>
        <div className="hakukentta">
          <input type="text" placeholder="Hae..." />
          <button type="hakunappi">Hae</button>
        </div>
      </div>
      <div id="hakemisto" className="sticky">
        <Link to="/Historia" className="button">Historia</Link>
        <Link to="/Pelivinkit" className="button">Pelivinkit -ja arvostelut</Link>
        <Link to="/Tapahtumat" className="button">Tapahtumat</Link>
        <Link to="/Pelitekniikka" className="button">Pelitekniikka -ja arvostelut</Link>
      </div>

      <div className='sisältö'>
        <Routes>
              <Route path="/" element={<Koti/>}/>
              <Route path="/Historia" element={<Historia />} />
              <Route path="/Pelivinkit" element={<Pelivinkit/>} />
              <Route path="/Tapahtumat" element={<Tapahtumat/>} />
              <Route path="/Pelitekniikka" element={<Pelitekniikka/>} />
        </Routes>
      </div>

      <div id="footer">
        <p>Arttu Lankinen © 2024</p>
      </div>

      <div id="background"></div>
    </div>
    </Router> 
  );
}

export default App;