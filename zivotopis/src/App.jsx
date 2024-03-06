import React, { Component } from 'react';
import './App.css'
import Zivotopis from  '../components/Zivotopis'

function App() {
  const conc = 74;
  const stress = 58;
  const mot= 99;

  return (
    <div>
      <Zivotopis date="31.02.1999." address="Rue du Soleil 12, Paris, Francuska" tel="091 2345 678" conc={conc} stress={stress} mot={mot}/>
    </div>
  )
}

export default App
