import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Tablica from "./components/Tablica";
import UnosForma from "./components/UnosForma";

function App() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Clothes/")
      .then(res => setClothes(res.data));
  }, []);

  return (
    <div className='App'>
      <h2>Popis ormara</h2>
      <Tablica clothes={clothes} />
      <UnosForma></UnosForma>
    </div>
  );
}

export default App;
