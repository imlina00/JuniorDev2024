import axios from "axios";
import { useState, useEffect } from "react";
import { Clothes } from "../interfaces";

interface FormaPodaci {
    id: number;
    vrsta: string;
    veličina: string;
    boja: string;
    slika: string;
}

interface UnosFormaProps {
    dodaj: (data: any) => void;
}

function UnosForma(props: UnosFormaProps) {
    const [veličina, postaviVelicinu] = useState<string[]>([]);
    const [formaPodaci, postaviPodatke] = useState<FormaPodaci>({
        id: 0,
        vrsta: "",
        veličina: "",
        boja: "",
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

    useEffect(() => {
        axios
            .get<FormaPodaci[]>("http://localhost:3001/clothes")
            .then(res => {
                console.log(res.data);

                const sizes: string[] = [];
                res.data.forEach(item => {
                    if (item.veličina && !sizes.includes(item.veličina)) {
                        sizes.push(item.veličina);
                    }
                });
                postaviVelicinu(sizes);
            })
            .catch(err => console.log(err.message));
    }, []);

    const obradiPodatke = (formaPodaci: FormaPodaci): Clothes => {

        return {
            id: formaPodaci.id,
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

            {/* <div>
                <label>
                    Veličina:
                    <select
                        name='veličina'
                        value={formaPodaci.veličina}
                        onChange={promjenaUlaza}
                        required
                    >
                        <option value=''>--Odaberi veličinu--</option>
                        {veličina.map((size, index) => (
                            <option key={formaPodaci.id + index} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </label>
            </div> */}

            <div>
                <label>
                    Veličina:
                    <input type='text' name='veličina' value={formaPodaci.veličina}
                        onChange={promjenaUlaza} required />
                </label>
            </div>

            <div>
                <label>
                    Boja:
                    <input type='text' name='boja' value={formaPodaci.boja}
                        onChange={promjenaUlaza} required />
                </label>
            </div>
            <div>
                <label>
                    Slika:
                    <input type='text' name='slika' value={formaPodaci.slika}
                        onChange={promjenaUlaza} required />
                </label>
            </div>

            <button type='submit'>Novi unos</button>
        </form>
    );
}

export default UnosForma;