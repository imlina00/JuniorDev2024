import React from 'react';
import './Zivotopis.css';
import Container from './Container';
import Percentage from './Percentage';

function Zivotopis(props) {
    return (
        <div>
            <h1>Yvonne</h1>
            <img src="/images/profilna.jpg" alt="Slika profila" />
            <Container title="Opći podaci">
                <div className='about'>
                    <p>Datum rođenja: <span>{props.date}</span></p>
                    <p>Adresa: <span>{props.address}</span></p>
                    <p>Kontakt: <span>{props.tel}</span></p>
                </div>
            </Container>
            <Container title="Sposobnosti">
                <p className='abilities'>Superkoncentracija:</p>
                <Percentage percentage={props.conc} />
                <p className='abilities'>Otpornost na stres:</p>
                <Percentage percentage={props.stress} />
                <p className='abilities'>Moć motivacije:</p>
                <Percentage percentage={props.mot} />
            </Container>
        </div>
    );
}

export default Zivotopis
