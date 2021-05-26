import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Cep() {
    const [cep, setCep] = useState('');
    const [cepData, setCepData] = useState({});
    const [showCep, setShowCep] = useState(false);

    function handleChangeCep(event) {
        setCep (event.target.value)
    }

    function handleCepSubmit(event) {
        event.preventDefault();

        axios.get (`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.data)
        .then(res => setCepData(res), setShowCep(true))
        .catch(erro => alert('Não foi possível localizar esse CEP'));
        
    }

    return (
        <div>
             <form >
                <label>CEP: </label>
                    <input onChange={e => handleChangeCep(e)} value={cep} placeholder="CEP" type="text" />
                <button type="submit" onClick={e => handleCepSubmit(e)}>Pesquisar</button>
            </form>
        {showCep &&
            (
                <div>
                    <p>CEP: {cepData.cep}</p>
                    <p>Bairro: {cepData.bairro}</p>
                    <p>Cidade: {cepData.localidade}</p>
                    <p>Estado: {cepData.uf}</p>
                </div>
            )
        }
       </div >
    )
}
export default Cep;