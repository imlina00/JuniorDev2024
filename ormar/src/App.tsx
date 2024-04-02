import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import FilterForm from './components/FilterForm';
import AddItemForm from './components/AddItemForm';
import KomadList from './components/KomadList';

const API_URL = 'http://localhost:3001/komadi';

interface KomadOdjece {
  id: number;
  naziv: string;
  vrsta: string;
  velicina: string;
  boja: string;
  slika: string;
}

const App: React.FC = () => {
  const [komadi, setKomadi] = useState<KomadOdjece[]>([]);
  const [filteredKomadi, setFilteredKomadi] = useState<KomadOdjece[]>([]);
  const [noviKomad, setNoviKomad] = useState<Partial<KomadOdjece>>({});
  const [filterKriterij, setFilterKriterij] = useState<string>('');
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    dohvatiKomade();
  }, []);

  useEffect(() => {
    filterKomade();
  }, [filterKriterij, komadi]);

  const dohvatiKomade = async () => {
    try {
      const response = await axios.get<KomadOdjece[]>(API_URL);
      setKomadi(response.data);
    } catch (error) {
      console.log('Greška pri dohvaćanju:', error);
    }
  };

  const filterKomade = () => {
    if (filterKriterij === '') {
      setFilteredKomadi(komadi);
    } else {
      const filtered = komadi.filter(komad => komad.vrsta === filterKriterij);
      setFilteredKomadi(filtered);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNoviKomad(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const dodajKomad = async () => {
    try {
      await axios.post(API_URL, noviKomad);
      dohvatiKomade();
      setNoviKomad({});
    } catch (error) {
      console.log('Greška pri dodavanju:', error);
    }
  };

  const obrisiKomad = async () => {
    if (selectedItemId !== null) {
      try {
        await axios.delete(`${API_URL}/${selectedItemId}`);
        dohvatiKomade();
      } catch (error) {
        console.log('Greška pri brisanju:', error);
      }
    }
    setShowDeleteDialog(false);
    setSelectedItemId(null);
  };

  return (
    <div className="App">
      <div className="FormContainer">
        <h1>Moj ormar</h1>
        <FilterForm filterKriterij={filterKriterij} setFilterKriterij={setFilterKriterij} />
        <AddItemForm noviKomad={noviKomad} handleChange={handleChange} dodajKomad={dodajKomad} />
      </div>
      <div className="TableContainer">
        <KomadList komadi={filteredKomadi} showDeleteDialog={showDeleteDialog} setShowDeleteDialog={setShowDeleteDialog} setSelectedItemId={setSelectedItemId} />
      </div>
      {showDeleteDialog && (
        <div className="DeleteDialog">
          <p>Želite li stvarno izbrisati proizvod?</p>
          <button onClick={obrisiKomad}>Da</button>
          <button onClick={() => setShowDeleteDialog(false)}>Ne</button>
        </div>
      )}
    </div>
  );
}

export default App;
