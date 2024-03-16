import React, {useState} from 'react'
import './App.css'
import Kontakt from './components/Kontakt'
import Adresa from './components/Adresa'
import Nacin from './components/Nacin'
import Tipka from './components/Tipka'

function App() {

  const [prihvacamUvjete, setPrihvacamUvjete] = useState(false);

  const handleUvjetiChange = () => {
    setPrihvacamUvjete(!prihvacamUvjete);
  };

  return (
    <div>
      <h1>Plaćanje</h1>
      <Kontakt></Kontakt>
      <Adresa></Adresa>
      <Nacin></Nacin>

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
      <Tipka prihvatioUvjete={prihvacamUvjete}></Tipka>
    </div>
  )
}

export default App
