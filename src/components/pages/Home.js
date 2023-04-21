import { useState, useRef } from 'react';

import './Home.css'

function Home({src}){

    const [valorAtual, atualizaValor] = useState(0);
    const [intervalId, atualizaIntervalId] = useState(null);
    const [pausado, atualizaPausado] = useState(true);

    const intervalRef = useRef(null);

    function iniciar(){
        const id = setInterval(() => {
            atualizaValor(valorAtual => valorAtual + 0.1);
        }, 100);
        atualizaIntervalId(id);
        atualizaPausado(false);
        intervalRef.current = id;
    }
    

    function pausar(){
        clearInterval(intervalRef.current);
        atualizaPausado(true);
    }

    function zerar(){
        clearInterval(intervalRef.current);
        atualizaIntervalId(null);
        atualizaPausado(true);
        atualizaValor(0);
    }
    

    return(
        <div className="container">
            <img src={src} alt='biscoito'></img>
            <a className='timer'>{valorAtual.toFixed(1)}</a>
            <div className='areaBtn'>
                {!pausado ? (
                    <a className='btn' onClick={pausar}>Pausar</a>
                ) : (
                    <a className='btn' onClick={iniciar}>Iniciar</a>
                )}
                <a className='btn' onClick={zerar}>Zerar</a>
            </div>
        </div>
    )
}

export default Home;
