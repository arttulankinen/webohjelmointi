import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Historia } from './sivut/Historia';
import { Arvostelut } from './sivut/Arvostelut';
import { Tapahtumat } from './sivut/Tapahtumat';
import { Pelitekniikka } from './sivut/Pelitekniikka';
import { Koti } from './sivut/Koti';
import gameplay from './images/gameplay.mp4';
import poster2 from './images/poster2.PNG';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return;
    }

    // Tarkista hakusana jokaiselta sivulta ja ohjaa käyttäjä haluttuun reittiin
    if (searchTerm.toLowerCase() === 'historia') {
      navigate('/Historia');
    } else if (searchTerm.toLowerCase() === 'arvostelut') {
      navigate('/Arvostelut');
    } else if (searchTerm.toLowerCase() === 'tapahtumat') {
      navigate('/Tapahtumat');
    } else if (searchTerm.toLowerCase() === 'pelitekniikka') {
      navigate('/Pelitekniikka');
    } else {
      console.log('Hakutermiä ei löytynyt mistään sivulta.');
    }
  };

  return (
    <div>
      <div id="header">
        <h1>
          <Link to="/" id="otsikko">GamingGuides</Link>
        </h1>
        <div className="hakukentta">
          <input type="text" placeholder="Hae..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button type="button" onClick={handleSearch}>Hae</button>
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
      <div className='container'>
          <h1 id='otsikkoid'>Tervetuloa GamingGuides-sivustolle!</h1>
          <p id='tekstiId'>Tämä sivusto on omistettu kaikille tietokonepeleistä innostuneille pelaajille. Olit sitten kokenut peluri tai vasta-alkaja, täältä löydät inspiraatiota, vinkkejä ja tietoa seuraavaa pelikokemustasi varten. </p>
          <div className='video-container'>
          <video src={gameplay} width={640} height={360} controls poster={poster2} />
     </div>
     <div id='kotibackground'></div>
     </div>
      <div id="footer">
        <p>Arttu Lankinen © 2024</p>
      </div>
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <Router>
//       <div>
//         <div id="header">
//           <h1>
//             <Link to="/" id="otsikko">GamingGuides</Link>
//           </h1>
//           <div className="hakukentta">
//             <input type="text" placeholder="Hae..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//             <button type="hakunappi" onClick={handleSearch} >Hae</button>
//           </div>
//         </div>
//         <div id="hakemisto" className="sticky">
//           <Link to="/Historia" className="button">Historia</Link>
//           <Link to="/Arvostelut" className="button">Arvostelut</Link>
//           <Link to="/Tapahtumat" className="button">Tapahtumat</Link>
//           <Link to="/Pelitekniikka" className="button">Pelitekniikka</Link>
//         </div>

//         <div className='sisältö'>
//           <Routes>
//             <Route path="/" element={<Koti />} />
//             <Route path="/Historia" element={<Historia />} />
//             <Route path="/Arvostelut" element={<Arvostelut />} />
//             <Route path="/Tapahtumat" element={<Tapahtumat />} />
//             <Route path="/Pelitekniikka" element={<Pelitekniikka />} />
//           </Routes>
//         </div>

//         <div id="footer">
//           <p>Arttu Lankinen © 2024</p>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function Main() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (searchTerm.trim() === '') {
//       return;
//     }
//     // Tarkista hakusana jokaiselta sivulta ja ohjaa käyttäjä haluttuun reittiin
//     if (searchTerm.toLowerCase() === 'historia') {
//       navigate('/Historia');
//     } else if (searchTerm.toLowerCase() === 'arvostelut') {
//       navigate('/Arvostelut');
//     } else if (searchTerm.toLowerCase() === 'tapahtumat') {
//       navigate('/Tapahtumat');
//     } else if (searchTerm.toLowerCase() === 'pelitekniikka') {
//       navigate('/Pelitekniikka');
//     } else {
//       console.log('Hakutermiä ei löytynyt mistään sivulta.');
//     }
//   };
// }


// export default App;