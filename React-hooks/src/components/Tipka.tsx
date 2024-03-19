import React from 'react';

interface TipkaProps {
  prihvatioUvjete: boolean;
  onNaruci: (podaci: any) => void;
}

function Tipka({ prihvatioUvjete, onNaruci }: TipkaProps) {
  function handleNaruciClick() {
    if (!prihvatioUvjete) {
      alert('Morate prihvatiti uvjete narudžbe prije nego što naručite.');
    } else {
      const podaciNarudzbe = {};
      onNaruci(podaciNarudzbe);
    }
  }

  return (
    <button onClick={handleNaruciClick}>Naruči</button>
  );
}

export default Tipka;
