import { Clothes } from "../interfaces";

interface Props {
    clo: Clothes;
}

function RedakTablice({ clo }: Props) {
    return (
        <tr>
            <td>{clo.id}</td>
            <td>{clo.outfit.vrsta}</td>
            <td>{clo.outfit.veličina || "-"}</td>
            <td>{clo.outfit.boja}</td>
            <td><img className="slika" src={clo.outfit.slika} alt={`${clo.outfit.vrsta} ${clo.outfit.boja}`} /></td>
        </tr>
    );
}

export default RedakTablice;