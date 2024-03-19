import { useState } from 'react';
import './App.css';
import Kontakt from './components/Kontakt';
import Adresa from './components/Adresa';
import Nacin from './components/Nacin';
import Tipka from './components/Tipka';
import Sazetak from './components/Sazetak';
import TemaContext from "./components/Kontekst";

function App() {
  const [prihvacamUvjete, setPrihvacamUvjete] = useState(false);
  const [narudzbaUspjesna, setNarudzbaUspjesna] = useState(false);
  const [podaci, setPodaci] = useState({
    ime: '',
    adresa: '',
    drzava: '',
    nacinPlacanja: '',
    email: ''
  });

  const [tema, postaviTemu] = useState("light")

  function promjenaTeme(){
    postaviTemu(tema === "light" ? "dark" : "light")
  }

  const handleUvjetiChange = () => {
    setPrihvacamUvjete(!prihvacamUvjete);
  };

  const handlePodaciChange = (noviPodaci: any) => {
    setPodaci({ ...podaci, ...noviPodaci });
  };

  const handleNacinChange = (nacinPlacanja: string) => {
    setPodaci({ ...podaci, nacinPlacanja });
  };

  const handlePodaciSubmit = () => {
    setNarudzbaUspjesna(true);
  };

  return (
    <div>
      <button onClick={promjenaTeme}>Light/Dark</button>
      <style>{`
        body {
          background: ${tema === "light" ? "#f0f0f0" : "#2b4c65"};
          color: ${tema === "light" ? "#2b4c65" : "#f0f0f0"};
        }
      `}</style>
      <TemaContext.Provider value={tema}>
        <h1>Plaćanje</h1>
        <Kontakt onKontaktChange={(email) => setPodaci({ ...podaci, email })} />
        <Adresa onPodaciChange={handlePodaciChange} />
        <Nacin onNacinChange={handleNacinChange} />
        <div className='uvjeti'>
          <label>
            <input
              type="checkbox"
              checked={prihvacamUvjete}
              onChange={handleUvjetiChange}
            />
            Prihvaćam uvjete narudžbe
          </label>
        </div>
        <Tipka
          prihvatioUvjete={prihvacamUvjete}
          onNaruci={handlePodaciSubmit}
        />
        {narudzbaUspjesna && <Sazetak ime={podaci.ime} adresa={podaci.adresa} drzava={podaci.drzava} nacinPlacanja={podaci.nacinPlacanja} email={podaci.email} />}
      </TemaContext.Provider>
    </div>
  );
}

export default App;
