import RedakTablice from "./RedakTablice";
import { Clothes } from '../interfaces';

interface Props {
    clothes: Clothes[];
}

function Tablica({ clothes }: Props) {
    return (
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
                {clothes.map(clo => (
                    <RedakTablice key={clo.id} clo={clo} />
                ))}
            </tbody>
        </table>
    );
}

export default Tablica;
