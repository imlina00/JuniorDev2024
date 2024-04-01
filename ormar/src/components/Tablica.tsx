// Tablica.tsx
import { useState, useEffect } from "react";
import RedakTablice from "./RedakTablice";
import { Clothes } from '../interfaces';

interface Props {
    clothes: Clothes[];
    onDelete: (id: string) => void;
}

const Tablica: React.FC<Props> = ({ clothes, onDelete }) => {
    const [filtriraniPodaci, postaviFiltriranePodatke] = useState<Clothes[]>([]);
    const [opcijaFiltriranja, postaviOpcijuFiltriranja] = useState<string>('');

    useEffect(() => {
        if (clothes.length > 0) {
            postaviFiltriranePodatke(clothes);
        }
    }, [clothes]);

    const handleFiltriranje = (opcija: string) => {
        // Postavljamo odabranu opciju filtriranja
        postaviOpcijuFiltriranja(opcija);

        // Filtriramo podatke ovisno o odabranoj opciji
        let filtrirani;
        if (opcija === 'XS' || opcija === 'S' || opcija === 'M' || opcija === 'L' || opcija === 'XL') {
            filtrirani = clothes.filter(clo => clo.outfit.veličina === opcija);
        } else if (opcija === 'suknja' || opcija === 'hlace' || opcija === 'majica') {
            filtrirani = clothes.filter(clo => clo.outfit.vrsta === opcija);
        } else {
            // Ako je odabrana opcija "Svi", prikazujemo sve podatke
            filtrirani = clothes;
        }
        postaviFiltriranePodatke(filtrirani);
    };

    return (
        <div>
            <div>
                <input type="radio" id="velicina" name="filtriranje" value="velicina" onChange={() => handleFiltriranje('')} checked={opcijaFiltriranja === ''} />
                <label htmlFor="velicina">Svi</label>
                <input type="radio" id="xs" name="filtriranje" value="XS" onChange={() => handleFiltriranje('XS')} checked={opcijaFiltriranja === 'XS'} />
                <label htmlFor="xs">XS</label>
                {/* Ostale veličine... */}
            </div>
            <div>
                <input type="radio" id="suknja" name="filtriranje" value="suknja" onChange={() => handleFiltriranje('suknja')} checked={opcijaFiltriranja === 'suknja'} />
                <label htmlFor="suknja">Suknje</label>
                {/* Ostale vrste odjeće... */}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vrsta</th>
                        <th>Veličina</th>
                        <th>Boja</th>
                        <th>Slika</th>
                    </tr>
                </thead>
                <tbody>
                    {filtriraniPodaci.map(clo => (
                        <RedakTablice key={clo.id} clo={clo} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tablica;
