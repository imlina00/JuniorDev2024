import RedakTablice from "./RedakTablice";
import { Clothes } from '../interfaces';

function Tablica({ clothes }: { clothes: Clothes[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Vrsta</th>
                    <th>Veličina</th>
                    <th>Boja</th>
                </tr>
            </thead>
            <tbody>
                {clothes.map(r => (
                    <RedakTablice key={r.id} clo={r} />
                ))}
            </tbody>
        </table>
    );
}

export default Tablica;
