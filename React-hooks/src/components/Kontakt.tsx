import React, { useState } from 'react';
import './Containers.css';

interface KontaktProps {
  onKontaktChange: (email: string) => void;
}

function Kontakt({ onKontaktChange }: KontaktProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function validateEmail(input: string) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    return isValid;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setEmail(inputValue);

    if (!validateEmail(inputValue)) {
      setError('Unesite valjanu e-mail adresu.');
    } else {
      setError('');
      onKontaktChange(inputValue);
    }
  }

  return (
    <div>
      <h2>Kontakt:</h2>
      <div className='container'>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email adresa..."
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Kontakt;
