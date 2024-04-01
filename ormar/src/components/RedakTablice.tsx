// RedakTablice.tsx
import { useState } from "react";
import { Clothes } from "../interfaces";

interface Props {
    clo: Clothes;
    onDelete: (id: string) => void;
}

const RedakTablice: React.FC<Props> = ({ clo, onDelete }) => {
    return (
        <tr>
            <td>{clo.id}</td>
            <td>{clo.outfit.vrsta}</td>
            <td>{clo.outfit.veličina || "-"}</td>
            <td>{clo.outfit.boja}</td>
            <td><img className="slika" src={clo.outfit.slika} alt={`${clo.outfit.vrsta} ${clo.outfit.boja}`} /></td>
            <td>
                <button onClick={() => onDelete(clo.id)}>Izbriši</button>
            </td>
        </tr>
    );
};

export default RedakTablice;
