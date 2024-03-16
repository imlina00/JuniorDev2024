import React, { useState } from 'react';
import "./Containers.css"

const Nacin = () => {
    const [nacinPlacanja, setNacinPlacanja] = useState('');

    const handleNacinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNacinPlacanja(event.target.value);
    };

    return (
        <div>
            <h2>Način plaćanja:</h2>
            <div className='container'>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="kartica"
                            checked={nacinPlacanja === 'kartica'}
                            onChange={handleNacinChange}
                        />
                        Plaćanje karticom
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="pouzecem"
                            checked={nacinPlacanja === 'pouzecem'}
                            onChange={handleNacinChange}
                        />
                        Plaćanje pouzećem
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Nacin;
