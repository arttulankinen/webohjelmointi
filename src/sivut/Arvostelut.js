import React from 'react';


function Arvostelut() {
  const toimintaPelit = [
    "CS:GO",
    "CS2",
    "Valorant",
    "Overwach2",
    "Escape From Tarkov"
  ];

  const seikkailuPelit = [
    "The Legend of Zelda: Breath of the Wild",
    "Horizon Zero Dawn",
    "Uncharted 4: A Thief's End",
    "Ghost of Tsushima",
    "God of War"
  ];

  const roolipelit = [
    "The Witcher 3: Wild Hunt",
    "Cyberpunk 2077",
    "Final Fantasy VII Remake",
    "Persona 5",
    "Elden Ring"
  ];

  const battleroyale = [
    "Fortnite",
    "Apex Legends",
    "PUBG",
    "COD, Warzone",
    "DayZ"
  ];
  return (
    <div className='container'>
      <h1>Arvostelut</h1>
      <h2>Suosituimmat pelit</h2>
      <h2>FPS</h2>
      <div className='pelit'>
      <ul>
        {toimintaPelit.map((peli, index) => (
          <li key={index}>{peli}</li>
        ))}
      </ul>
      </div>

      <h2>BattleRoyale</h2>
      <div className='pelit'>
      <ul>
        {battleroyale.map((peli, index) => (
          <li key={index}>{peli}</li>
        ))}
      </ul>
      </div>

      <h2>Rpg-pelit</h2>
      <div className='pelit'>
      <ul >
        {roolipelit.map((peli, index) => (
          <li key={index}>{peli}</li>
        ))}
      </ul>
      </div>

      <h2>seikkailuPelit</h2>
      <div className='pelit'>
      <ul>
        {seikkailuPelit.map((peli, index) => (
          <li key={index}>{peli}</li>
        ))}
      </ul>
      </div>
      <div id='arvostelutbackground'></div>
    </div>
  );
}


export { Arvostelut }