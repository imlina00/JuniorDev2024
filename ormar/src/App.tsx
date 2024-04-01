import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Tablica from "./components/Tablica";
import UnosForma from "./components/UnosForma";
import { Clothes } from "./interfaces";
import Brisanje from "./components/Brisanje";

function App() {
  const [clothes, setClothes] = useState<Clothes[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/clothes/")
      .then(res => setClothes(res.data));
  }, []);

  const postaviPodatke = (noviPodaci: Clothes[]) => {
    setClothes(noviPodaci);
  };

  return (
    <div className='App'>
      <div className="unos-i-tablica-container">
        <div className="unos-forma-container">
          <h1>Unos ormara</h1>
          <UnosForma dodaj={postaviPodatke} />
        </div>
        <div className="tablica-container">
          <h1>Popis ormara</h1>
          <Tablica clothes={clothes} />
        </div>
      </div>
    </div>
  );
}

export default App;
