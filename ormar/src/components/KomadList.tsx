import React from 'react';

interface KomadOdjece {
  id: number;
  naziv: string;
  vrsta: string;
  velicina: string;
  boja: string;
  slika: string;
}

interface KomadListProps {
  komadi: KomadOdjece[];
  showDeleteDialog: boolean;
  setShowDeleteDialog: (show: boolean) => void;
  setSelectedItemId: (id: number) => void;
}

const KomadList: React.FC<KomadListProps> = ({ komadi, showDeleteDialog, setShowDeleteDialog, setSelectedItemId }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naziv</th>
          <th>Vrsta</th>
          <th>Veličina</th>
          <th>Boja</th>
          <th>Slika</th>
          <th>Brisanje</th>
        </tr>
      </thead>
      <tbody>
        {komadi.map(komad => (
          <tr key={komad.id}>
            <td>{komad.naziv}</td>
            <td>{komad.vrsta}</td>
            <td>{komad.velicina}</td>
            <td><div style={{ backgroundColor: komad.boja, width: '20px', height: '20px', borderRadius: '20px' }}></div></td>
            <td><img src={komad.slika} alt="Slika komada" width="40" height="40" /></td>
            <td>
              <button onClick={() => {
                setSelectedItemId(komad.id);
                setShowDeleteDialog(true);
              }}>Obriši</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default KomadList;
