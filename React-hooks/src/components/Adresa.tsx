import React, { useState } from 'react';
import './Containers.css';

interface AdresaProps {
  onPodaciChange: (noviPodaci: any) => void;
}

const Adresa: React.FC<AdresaProps> = ({ onPodaciChange }) => {
  const [ime, setIme] = useState('');
  const [adresa, setAdresa] = useState('');
  const [drzava, setDrzava] = useState('');

  const handleImeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIme(event.target.value);
    onPodaciChange({ ime: event.target.value, adresa, drzava });
  };

  const handleAdresaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdresa(event.target.value);
    onPodaciChange({ ime, adresa: event.target.value, drzava });
  };

  const handleDrzavaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDrzava(event.target.value);
    onPodaciChange({ ime, adresa, drzava: event.target.value });
  };

  return (
    <div>
      <h2>Adresa:</h2>
      <div className='container'>
        <div className='label'>
          <label>
            Ime:
            <br />
            <input
              type="text"
              value={ime}
              onChange={handleImeChange}
              placeholder="Unesite ime"
            />
          </label>
        </div>
        <br />
        <div className='label'>
          <label>
            Adresa:
            <br />
            <input
              type="text"
              value={adresa}
              onChange={handleAdresaChange}
              placeholder="Unesite adresu"
            />
          </label>
        </div>
        <br />
        <div className='label'>
          <label>
            Država:
            <br />
            <select value={drzava} onChange={handleDrzavaChange}>
              <option value="">Odaberite državu</option>
              <option value="Hrvatska">Hrvatska</option>
              <option value="Njemačka">Njemačka</option>
              <option value="Francuska">Francuska</option>
              <option value="Italija">Italija</option>
              <option value="Španjolska">Španjolska</option>
              <option value="Belgija">Belgija</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Adresa;
