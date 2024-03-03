import React from 'react';


function Tapahtumat() {
  
      const nykyisetTapahtumat = [
        { ajankohta: '29.2. – 3.3.2024', nimi: 'Lantrek 2024', paikkakunta: 'Tampere', paikkamaara: 0 },
        { ajankohta: '6.6. – 9.6.2024', nimi: 'Vectorama 2024', paikkakunta: 'Oulu', paikkamaara: 0 }
      ];
    
      const menneetTapahtumat = [
        { ajankohta: '22.2. – 25.2.2024', nimi: 'Assembly Winter 2024', paikkakunta: 'Helsinki', paikkamaara: 0 },
        { ajankohta: '27.12. – 30.12.2023', nimi: 'Urbanlan Winter 2023', paikkakunta: 'Kokkola', paikkamaara: 0 },
        { ajankohta: '8.12. – 10.12.2023', nimi: 'THE ENCOUNTER 2023', paikkakunta: 'Maalahti', paikkamaara: 189 },
        { ajankohta: '10.11. – 12.11.2023', nimi: 'Mini Jessembly', paikkakunta: 'Jyväskylä', paikkamaara: 40 },
        { ajankohta: '27.10. – 29.10.2023', nimi: 'Skynett Langames 27', paikkakunta: 'Imatra', paikkamaara: 200 },
        { ajankohta: '26.10. – 29.10.2023', nimi: 'Insomnia XXIII', paikkakunta: 'Ulvila', paikkamaara: 252 },
        { ajankohta: '7.10. – 8.10.2023', nimi: 'HäjyLAN 2023', paikkakunta: 'Kauhava', paikkamaara: 80 },
        { ajankohta: '3.8. – 6.8.2023', nimi: 'Assembly Summer 2023', paikkakunta: 'Helsinki', paikkamaara: 0 },
        { ajankohta: '14.7. – 16.7.2023', nimi: 'Midnight Sun Games', paikkakunta: 'Rovaniemi', paikkamaara: 50 },
        { ajankohta: '15.6. – 18.6.2023', nimi: 'Vectorama 2023', paikkakunta: 'Oulu', paikkamaara: 1000 },
        { ajankohta: '14.4. – 16.4.2023', nimi: 'Stage142', paikkakunta: 'Jyväskylä', paikkamaara: 200 },
        { ajankohta: '7.4. – 9.4.2023', nimi: 'Electrolan 3.0', paikkakunta: 'Kuopio', paikkamaara: 92 },
        { ajankohta: '2.3. – 5.3.2023', nimi: 'LanTrek 2023', paikkakunta: 'Tampere', paikkamaara: 900 }
      ];
    
      return (
    
        <div className='container'>
          <h2>Nykyiset tapahtumat</h2>
          <table>
            <thead>
              <tr>
                <th>Ajankohta</th>
                <th>Tapahtuman nimi</th>
                <th>Paikkakunta</th>
                <th>Paikkamäärä</th>
              </tr>
            </thead>
            <tbody>
              {nykyisetTapahtumat.map(tapahtuma => (
                <tr key={tapahtuma.ajankohta}>
                  <td>{tapahtuma.ajankohta}</td>
                  <td>{tapahtuma.nimi}</td>
                  <td>{tapahtuma.paikkakunta}</td>
                  <td>{tapahtuma.paikkamaara}</td>
                </tr>
              ))}
            </tbody>
          </table>
    
          <h2>Menneet tapahtumat</h2>
          <table>
            <thead>
              <tr>
                <th>Ajankohta</th>
                <th>Tapahtuman nimi</th>
                <th>Paikkakunta</th>
                <th>Paikkamäärä</th>
              </tr>
            </thead>
            <tbody>
              {menneetTapahtumat.map(tapahtuma => (
                <tr key={tapahtuma.ajankohta}>
                  <td>{tapahtuma.ajankohta}</td>
                  <td>{tapahtuma.nimi}</td>
                  <td>{tapahtuma.paikkakunta}</td>
                  <td>{tapahtuma.paikkamaara}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div id='tapahtumatbackground'></div>
        </div>
      );
    }

export {Tapahtumat}