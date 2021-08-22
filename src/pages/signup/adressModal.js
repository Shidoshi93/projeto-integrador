import React, { useState } from 'react'
import axios from 'axios'
import {
    AddressContainer,
    ContainerCep
} from './signupStyle'


const AddressModal = () => {
    const [valuecep, setvaluecep] = useState('')
    const [cepData, setCepData] = useState({})
    const [user, setUser] = useState({})

    const token = localStorage.getItem('token')

    const handleChangeCep = (event) => {
        setvaluecep(event.target.value)
    }

    const handleCepSubmit = (event) => {
        event.preventDefault()

        axios.get(`https://viacep.com.br/ws/${valuecep}/json/`)
            .then((res) => {
                setCepData(res.data)
                console.log(cepData)
            })
            .catch(erro => alert('Não foi possível localizar esse CEP'));
        return [cepData];
    }

    const signup = () => {
        alert("Cadastro concluído com sucesso")

        // pegar user
        axios.get("", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setUser(res.data)
        })
        .catch(() => {

        })

        const address = {
            user_id: user.id
        }

        // address
        axios.post("", address)
    }

    return (
        <div>
            <ContainerCep>
                <div className='boxCep'>
                    <label className='labelCep'>CEP:</label>
                    <input
                        type='text'
                        placeholder='Apenas os números.'
                        value={valuecep}
                        onChange={handleChangeCep}
                    />
                </div>
                <button onClick={handleCepSubmit}>Buscar endereço</button>
            </ContainerCep>

            <AddressContainer>
                <input className='addressInput' value={cepData && cepData.logradouro} />
                <input className='addressInput' value={cepData && cepData.bairro} />
                <input className='addressInput' value={cepData && cepData.ddd} />
                <input className='addressInput' value={cepData && cepData.localidade} />
                <input className='addressInput' value={cepData && cepData.uf} />
                <button onClick={() => { if (window.confirm('Confirma o endereço?')) { signup() } }}>Concluir</button>
            </AddressContainer>
        </div>
    )
}
export default AddressModal