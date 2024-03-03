import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Historia } from './sivut/Historia';
import { Arvostelut } from './sivut/Arvostelut';
import { Tapahtumat } from './sivut/Tapahtumat';
import { Pelitekniikka } from './sivut/Pelitekniikka';
import { Koti } from './sivut/Koti';


function App() {

  const handleSearch = (event) => {

  }


  return (
    <Router>
      <div>
        <div id="header">
          <h1>
            <Link to="/" id="otsikko">GamingGuides</Link>
          </h1>
          <div className="hakukentta">
            <input type="text" placeholder="Hae..." />
            <button type="hakunappi" onClick={handleSearch}>Hae</button>
          </div>
        </div>
        <div id="hakemisto" className="sticky">
          <Link to="/Historia" className="button">Historia</Link>
          <Link to="/Arvostelut" className="button">Arvostelut</Link>
          <Link to="/Tapahtumat" className="button">Tapahtumat</Link>
          <Link to="/Pelitekniikka" className="button">Pelitekniikka</Link>
        </div>

        <div className='sisältö'>
          <Routes>
            <Route path="/" element={<Koti />} />
            <Route path="/Historia" element={<Historia />} />
            <Route path="/Arvostelut" element={<Arvostelut />} />
            <Route path="/Tapahtumat" element={<Tapahtumat />} />
            <Route path="/Pelitekniikka" element={<Pelitekniikka />} />
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