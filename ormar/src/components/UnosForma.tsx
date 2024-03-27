import { useState } from "react";

interface FormaPodaci {
    id: number;
    vrsta: string;
    veličina: string;
    boja: string;
    slika: string;
}

function UnosForma() {
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
    };

    function promjenaUlaza(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
        console.log(formaPodaci);
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
            {/* <div>
                <label>
                    Slika:
                    <input type='text' name='slika' value={formaPodaci.slika}
                        onChange={promjenaUlaza} required />
                </label>
            </div> */}

            <button type='submit'>Novi unos</button>
        </form>
    );
}

export default UnosForma;
