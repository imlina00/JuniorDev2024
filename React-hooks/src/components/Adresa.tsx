import React, { useState } from 'react';
import './Containers.css';

const Adresa = () => {
    const [ime, setIme] = useState('');
    const [adresa, setAdresa] = useState('');
    const [drzava, setDrzava] = useState('');

    const handleImeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIme(event.target.value);
    };

    const handleAdresaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdresa(event.target.value);
    };

    const handleDrzavaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDrzava(event.target.value);
    };

    return (
        <div>
            <h2>Adresa:</h2>
            <div className='container'>
                <label>
                    Ime:
                    <br/>
                    <input
                        type="text"
                        value={ime}
                        onChange={handleImeChange}
                        placeholder="Unesite ime"
                    />
                </label>
                <br />
                <label>
                    Adresa:
                    <br/>

                    <input
                        type="text"
                        value={adresa}
                        onChange={handleAdresaChange}
                        placeholder="Unesite adresu"
                    />
                </label>
                <br />
                <label>
                    Država:
                    <br/>

                    <select value={drzava} onChange={handleDrzavaChange}>
                        <option value="">Odaberite državu</option>
                        <option value="Hrvatska">Hrvatska</option>
                        <option value="Njemačka">Njemačka</option>
                        <option value="Francuska">Francuska</option>
                        <option value="Italija">Italija</option>
                        {/* Dodajte ostale željene države */}
                    </select>
                </label>
            </div>
        </div>
    );
};

export default Adresa;
