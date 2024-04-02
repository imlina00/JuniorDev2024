import React from 'react';

interface KomadOdjece {
  id: number;
  naziv: string;
  vrsta: string;
  velicina: string;
  boja: string;
  slika: string;
}

interface AddItemFormProps {
  noviKomad: Partial<KomadOdjece>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  dodajKomad: () => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ noviKomad, handleChange, dodajKomad }) => {
  return (
    <form onSubmit={dodajKomad}>
      <div>
        <label htmlFor="naziv">Naziv:</label>
        <input type="text" name="naziv" placeholder="Naziv" value={noviKomad.naziv || ''} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="vrsta">Vrsta:</label>
        <select name="vrsta" value={noviKomad.vrsta || ''} onChange={handleChange} required>
          <option value="">Odaberite vrstu</option>
          <option value="Gornji dio">Gornji dio</option>
          <option value="Traperice">Traperice</option>
        </select>
      </div>
      <div>
        <label htmlFor="velicina">Veličina:</label>
        <select id="velicina" name="velicina" value={noviKomad.velicina || ''} onChange={handleChange} required>
          <option value="">Odaberite veličinu</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div>
        <label htmlFor="boja">Boja: </label>
        <input type="color" name="boja" value={noviKomad.boja || ''} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="slika">URL slike: </label>
        <input type="url" name="slika" placeholder="URL slike" value={noviKomad.slika || ''} onChange={handleChange} required />
      </div>
      <br />
      <button type="submit">Dodaj komad</button>
    </form>
  );
}

export default AddItemForm;
