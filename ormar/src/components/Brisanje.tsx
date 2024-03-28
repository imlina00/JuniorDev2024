import axios from "axios";
import { useState } from "react";

interface Props {
    promjena: (data: any) => void;
}

function Brisanje(props: Props) {
    const [idPodatka, postaviId] = useState(0);

    function brisiPodatak(id: number) {
        axios.delete(`http://localhost:3001/clothes/${id}`).then(rez => {
            axios
                .get("http://localhost:3001/clothes")
                .then(rez => props.promjena(rez.data));
        });
    }

    return (
        <div>
            <h2>Brisanje podataka</h2>
            <div>
                <label>
                    Unesite ID podatka:
                    <input
                        type='number'
                        name='id'
                        value={idPodatka}
                        onChange={e => postaviId(parseInt(e.target.value))}
                    />
                </label>
            </div>
            <button onClick={() => brisiPodatak(idPodatka)}>Obriši komad</button>
        </div>
    );
}

export default Brisanje;
