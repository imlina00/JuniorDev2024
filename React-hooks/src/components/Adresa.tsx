import React, { useState } from 'react';
import './Containers.css';

interface AdresaProps {
  onPodaciChange: (noviPodaci: any) => void;
}

function Adresa({ onPodaciChange }: AdresaProps) {
  const [ime, setIme] = useState('');
  const [adresa, setAdresa] = useState('');
  const [drzava, setDrzava] = useState('');

  function handleImeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const novoIme = event.target.value;
    setIme(novoIme);
    onPodaciChange({ ime: novoIme, adresa, drzava });
  }

  function handleAdresaChange(event: React.ChangeEvent<HTMLInputElement>) {
    const novaAdresa = event.target.value;
    setAdresa(novaAdresa);
    onPodaciChange({ ime, adresa: novaAdresa, drzava });
  }

  function handleDrzavaChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const novaDrzava = event.target.value;
    setDrzava(novaDrzava);
    onPodaciChange({ ime, adresa, drzava: novaDrzava });
  }

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
}

export default Adresa;
