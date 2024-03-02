import React from 'react';
import gameplay from '../images/gameplay.mp4'
import poster2 from '../images/poster2.PNG'

function Koti() {
  return (
    <div className='container'>
     <h1 id='otsikkoid'>Tervetuloa GamingGuides-sivustolle!</h1>
     <p id='tekstiId'>Tämä sivusto on omistettu kaikille tietokonepeleistä innostuneille pelaajille. Olit sitten kokenut peluri tai vasta-alkaja, täältä löydät inspiraatiota, vinkkejä ja tietoa seuraavaa pelikokemustasi varten. </p>
     <div className='video-container'>
     <video src={gameplay} width={640} height={360} controls poster={poster2} />
     </div>
     </div>
  );
}
export {Koti}