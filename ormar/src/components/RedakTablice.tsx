import { Clothes } from "../interfaces";

function RedakTablice({ clo }: {clo: Clothes}) {
    return (
        <tr>
            <td>{clo.id}</td>
            <td>{clo.vrsta}</td>
            <td>{clo.veličina}</td>
            <td>{clo.boja}</td>
            {/* Ovdje ćemo koristiti slika izravno kao atribut src */}
            <td><img src={clo.slika} alt={`${clo.vrsta} ${clo.boja}`} /></td>
        </tr>
    );
}

export default RedakTablice;
