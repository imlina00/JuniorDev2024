import axios from "axios";
import { useState, useEffect } from "react";
import { Clothes } from "../interfaces";

interface FormaPodaci {
    vrsta: string;
    veličina: string;
    boja: string;
    slika: string;
}

interface UnosFormaProps {
    dodaj: (data: any) => void;
}

function UnosForma(props: UnosFormaProps) {
    const [formaPodaci, postaviPodatke] = useState<FormaPodaci>({
        vrsta: "",
        veličina: "", // Ovdje ćemo odabrati veličinu
        boja: "#000000", // Početna vrijednost boje
        slika: "",
    });

    const saljiPodatke = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formaPodaci);

        const zaSlanje = obradiPodatke(formaPodaci)

        axios.post('http://localhost:3001/clothes', zaSlanje, {
            headers: {
                'content-type': "application/json"
            }
        })
            .then(rez => {
                axios.get("http://localhost:3001/clothes")
                    .then(rez => props.dodaj(rez.data));
            })
    };

    function promjenaUlaza(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
    }

    const obradiPodatke = (formaPodaci: FormaPodaci): Clothes => {
        // Generiramo random ID (ovdje možete koristiti neki bolji algoritam za generiranje ID-a)
        const randomId = Math.floor(Math.random() * 1000) + 1;

        return {
            id: randomId,
            outfit: {
                vrsta: formaPodaci.vrsta,
                veličina: formaPodaci.veličina,
                boja: formaPodaci.boja,
                slika: formaPodaci.slika
            }
        }
    }

    return (
        <form onSubmit={saljiPodatke}>
            <div>
                <label>
                    Vrsta:
                    <input
                        type='text'
                        name='vrsta'
                        value={formaPodaci.vrsta}
                        onChange={promjenaUlaza}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    Veličina:
                    <select
                        name='veličina'
                        value={formaPodaci.veličina}
                        onChange={promjenaUlaza}
                        required
                    >
                        <option value=''>--Odaberi veličinu--</option>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Boja:
                    <input
                        type='color'
                        name='boja'
                        value={formaPodaci.boja}
                        onChange={promjenaUlaza}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    Slika:
                    <input
                        type='text'
                        name='slika'
                        value={formaPodaci.slika}
                        onChange={promjenaUlaza}
                        required
                    />
                </label>
            </div>

            <button type='submit'>Novi unos</button>
        </form>
    );
}

export default UnosForma;
