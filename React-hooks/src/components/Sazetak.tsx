import TemaContext from "./Kontekst";
import "./Containers.css"

import React from 'react';

interface SazetakProps {
  ime: string;
  email: string;
  adresa: string;
  drzava: string;
  nacinPlacanja: string;
}

const Sazetak: React.FC<SazetakProps> = ({ ime, email, adresa, drzava, nacinPlacanja }) => {
  return (
    <div className='sazetak'>
      <h2>Sažetak narudžbe:</h2>
      <p>Ime: {ime}</p>
      <p>Email: {email}</p>
      <p>Adresa: {adresa}</p>
      <p>Država: {drzava}</p>
      <p>Način plaćanja: {nacinPlacanja}</p>
    </div>
  );
};

export default Sazetak;
