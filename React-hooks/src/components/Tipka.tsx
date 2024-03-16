import React from 'react';
import "./Containers.css"

interface TipkaProps {
  prihvatioUvjete: boolean;
}

const Tipka: React.FC<TipkaProps> = ({ prihvatioUvjete }) => {
  const handleNaruciClick = () => {
    if (!prihvatioUvjete) {
      alert('Morate prihvatiti uvjete narudžbe prije nego što naručite.');
    } else {
      // Ovdje dodajte logiku za narudžbu...
      alert('Vaša narudžba je uspješno poslana!');
    }
  };

  return (
    <button onClick={handleNaruciClick}>Naruči</button>
  );
};

export default Tipka;
