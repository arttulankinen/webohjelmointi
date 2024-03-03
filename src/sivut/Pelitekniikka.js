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
      <div>
       <ol id='pelitekniikkateksti' >
          <li>Yhteensopivuus: Varmista, että kaikki osat ovat yhteensopivia keskenään. Tämä sisältää tarkistamisen, että emolevy tukee valitsemiasi prosessoria ja muistia, että virtalähde pystyy tarjoamaan tarpeeksi virtaa kaikille komponenteille ja että koteloon mahtuvat kaikki osat.</li>

          <li>turvallisuus: Maadoitus on tärkeää välttämään staattista sähköä vaurioittamasta herkkiä komponentteja. Käytä maadoitettua ranneketta tai kosketa maadoitettua pintaa ennen kuin käsittelet herkkiä osia.</li>

          <li>Oikeat työkalut: Varmista, että sinulla on oikeat työkalut kuten ruuvimeisseli ja tarvittavat kiinnitystarvikkeet. Tämä auttaa varmistamaan, että komponentit kiinnittyvät oikein ja turvallisesti.</li>

          <li>Lämpötilanhallinta: Huolehdi, että tietokoneesi on riittävästi jäähdytetty. Tämä sisältää varmistamisen, että kotelossa on riittävä ilmavirtaus ja että prosessori ja näytönohjain ovat varustettu asianmukaisilla jäähdytysratkaisuilla, kuten tuulettimilla tai jäähdytyssiruilla.</li>

          <li>Kaapelinhallinta: Pyri pitämään kaapelit järjestäytyneinä ja siisteinä kotelossa. Tämä ei ainoastaan helpota ilmavirran liikkumista, mutta myös helpottaa vianetsintää ja huoltoa tulevaisuudessa.</li>

          <li>BIOS-asetukset: Kun olet asentanut kaikki komponentit, muista tarkistaa BIOS-asetukset. Usein on tarpeen määrittää oikeat käynnistysasetukset ja varmistaa, että kaikki komponentit tunnistetaan oikein.</li>

          <li>Ohjainten ja käyttöjärjestelmän asennus: Kun tietokone on kasattu, sinun tulee asentaa käyttöjärjestelmä ja tarvittavat ohjaimet. Tämä varmistaa, että tietokoneesi toimii oikein ja hyödyntää kaikkia komponentteja täysimääräisesti.</li>

          <li>Testaus: Ennen kuin alat käyttää tietokonetta normaalisti, on suositeltavaa tehdä perusteellinen testaus varmistaaksesi, että kaikki toimii kuten pitää. Tämä sisältää käynnistystestit, suorituskyvyn testit ja mahdollisesti stressitestit komponenteille.</li>

          <li>Noudattamalla näitä periaatteita voit varmistaa, että tietokoneesi kokoaminen sujuu mahdollisimman sujuvasti ja että lopputulos on luotettava ja toimiva järjestelmä.</li></ol>
      </div>
      <div id='pelitekniikkabackground'></div>
    </div>
    
  );
}


export {Pelitekniikka}