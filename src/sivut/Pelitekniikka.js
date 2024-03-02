import React from 'react';


function Pelitekniikka() {
  const osat = [
    { nimi: 'Emolevy', kuvaus: 'ASUS ROG Strix B550-F Gaming', hinta: '199 €' },
    { nimi: 'Prosessori', kuvaus: 'AMD Ryzen 7 5800X', hinta: '449 €' },
    { nimi: 'RAM-muisti', kuvaus: 'G.Skill Trident Z RGB DDR4 32GB (2x16GB) 3600MHz', hinta: '249 €' },
    { nimi: 'Kiintolevy', kuvaus: 'Samsung 970 EVO Plus 1TB NVMe M.2 SSD', hinta: '169 €' },
    { nimi: 'Näytönohjain', kuvaus: 'NVIDIA GeForce RTX 3080', hinta: '699 €' },
    { nimi: 'Virtalähde', kuvaus: 'Seasonic Focus GX-750', hinta: '129 €' },
    { nimi: 'Näyttö', kuvaus: 'ASUS TUF Gaming VG27AQ1A', hinta: '399 €' },
    { nimi: 'Hiiri', kuvaus: 'Logitech G502 HERO', hinta: '79 €' },
    { nimi: 'Näppäimistö', kuvaus: 'Corsair K95 RGB PLATINUM', hinta: '199 €' },
    { nimi: 'Hiirimatto', kuvaus: 'SteelSeries QcK XXL', hinta: '39 €' },
    { nimi: 'Verkkokortti', kuvaus: 'TP-Link Archer TX3000E', hinta: '49 €' },
    { nimi: 'Kotelo', kuvaus: 'Aerocool Trinity Mini v1, ikkunallinen mATX-kotelo', hinta: '44 €' }
  ];

  return (
    <div className='container'>
      <h2>Tietokoneen osat</h2>
      <table>
        <thead>
          <tr>
            <th>Osan nimi</th>
            <th>Kuvaus</th>
            <th>Hinta</th>
          </tr>
        </thead>
        <tbody>
          {osat.map(osa => (
            <tr key={osa.nimi}>
              <td>{osa.nimi}</td>
              <td>{osa.kuvaus}</td>
              <td>{osa.hinta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export {Pelitekniikka}