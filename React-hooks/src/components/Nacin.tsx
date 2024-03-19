import React, { useState } from 'react';
import './Containers.css';

interface NacinProps {
  onNacinChange: (nacinPlacanja: string) => void;
}

const Nacin: React.FC<NacinProps> = ({ onNacinChange }) => {
  const [nacinPlacanja, setNacinPlacanja] = useState('');

  const handleNacinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const noviNacinPlacanja = event.target.value;
    setNacinPlacanja(noviNacinPlacanja);
    onNacinChange(noviNacinPlacanja);
  };

  return (
    <div>
      <h2>Način plaćanja:</h2>
      <div className='container'>
        <div className='thing'>
          <label>
            <input
              type="radio"
              value="karticom"
              checked={nacinPlacanja === 'karticom'}
              onChange={handleNacinChange}
            />
            Plaćanje karticom
          </label>
        </div>
        <div className='thing'>
          <label>
            <input
              type="radio"
              value="pouzećem"
              checked={nacinPlacanja === 'pouzećem'}
              onChange={handleNacinChange}
            />
            Plaćanje pouzećem
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nacin;
