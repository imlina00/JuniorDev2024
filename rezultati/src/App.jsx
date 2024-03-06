import "./App.css";
import { useState } from "react";

import Prikaz from "./components/Prikaz";
import Tipka from "./components/Tipka";
import Odbrojavanje from "./components/Odbrojavanje";
import Klub from "./components/Klub";

function App() {
  const [brojaci, postaviBrojace] = useState({ prvi: 0, drugi: 1 });

  function uvecajPrvi() {
    const novi = {
      prvi: brojaci.prvi + 1,
      drugi: brojaci.drugi
    }
    postaviBrojace(novi)
  }

  function uvecajDrugi() {
    let novi = { ...brojaci }
    novi.drugi += 1
    postaviBrojace(novi)
  }

  function umanjiPrvi() {
    if (brojaci.prvi > 0) {
      const novi = {
        prvi: brojaci.prvi - 1,
        drugi: brojaci.drugi
      }
      postaviBrojace(novi)
    }
  }

  function umanjiDrugi() {
    if (brojaci.drugi > 0) {
      let novi = { ...brojaci }
      novi.drugi -= 1
      postaviBrojace(novi)
    }
  }

  function resetirajBrojace() {
    postaviBrojace({ prvi: 0, drugi: 0 });
  }

  function Datum() {
    const d = new Date();
    const dan = d.getDate().toString().padStart(2, '0');
    const mjesec = (d.getMonth() + 1).toString().padStart(2, '0'); // Mjeseci počinju od 0
    const godina = d.getFullYear();
    const datum = `${dan}.${mjesec}.${godina}`;
    return datum;
  }

  return (
    <div className="container">
      <p>{Datum()}</p>
      <Odbrojavanje />     
      <div className="klubovi">
        <Klub  ime="Dinamo" url="https://upload.wikimedia.org/wikipedia/hr/thumb/6/65/NKdinamozagreb.svg/1200px-NKdinamozagreb.svg.png"/>
        <Prikaz prviBroj={brojaci.prvi} drugiBroj={brojaci.drugi} />
        <Klub  ime="Hajduk" url="https://upload.wikimedia.org/wikipedia/bs/c/c4/HNK_Hajduk_Split.png"/>
      </div>
      <div className="akcije">
        <Tipka natpis='-' akcija={umanjiPrvi} />
        <Tipka natpis='+' akcija={uvecajPrvi} />
        <Tipka natpis='-' akcija={umanjiDrugi} />
        <Tipka natpis='+' akcija={uvecajDrugi} />
      </div>
      <Tipka natpis="RESET" akcija={() => resetirajBrojace()} />
    </div>
  );
}

export default App;
