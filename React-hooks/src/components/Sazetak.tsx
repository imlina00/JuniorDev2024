import './Containers.css';

interface SazetakProps {
  ime: string;
  email: string;
  adresa: string;
  drzava: string;
  nacinPlacanja: string;
  narudzbaUspjesna: boolean;
}

function Sazetak({ ime, email, adresa, drzava, nacinPlacanja, narudzbaUspjesna }: SazetakProps) {
  if (!narudzbaUspjesna) {
    return null;
  }

  return (
    <div className='sazetak'>
      <h2>Sažetak narudžbe:</h2>
      <p>Ime: {ime}</p>
      <p>Email: {email}</p>
      <p>Adresa: {adresa}</p>
      <p>Država: {drzava}</p>
      <p>Način plaćanja: {nacinPlacanja}</p>
    </div>
  );
}

export default Sazetak;
