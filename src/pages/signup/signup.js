import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
    MotherBox,
    Form,
    FormDataContainer,
    Label,
    Input,
    InputA,
    BtnCep,
    FormBtnContainer

} from './signupStyle';

import {Titulo} from '../../styles/titleStyle'

import {
    BtnSend,
    BtnClear
} from '../../styles/buttonStyle'


function Cadastro() {
    const [valueemail, setvalueemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const [valuesenhaconfirma, setvaluesenhaconfirma] = useState('')
    const [valuecep, setvaluecep] = useState('');
    const [cepData, setCepData] = useState({});

    const handleChangeCep = (event) => {
        setvaluecep(event.target.value)
        console.log(valuecep)
    }

    const handleCepSubmit = (event) => {
        event.preventDefault()

        axios.get(`https://viacep.com.br/ws/${valuecep}/json/`)
            .then(res => res.data)
            .then(res => setCepData(res))
            .catch(erro => alert('Não foi possível localizar esse CEP'));
        return [cepData];
    }

    const onchangeemail = (event) => {
        setvalueemail(event.target.value)
        console.log(valueemail)
    }

    const onchangesenha = (event) => {
        setvaluesenha(event.target.value)
        console.log(valuesenha)
    }

    const onchangesenhaconfirma = (event) => {
        setvaluesenhaconfirma(event.target.value)
        console.log(valuesenhaconfirma)
    }


    return (
        <MotherBox>

            <Titulo>Cadastre-se</Titulo>

            <Form>
                <FormDataContainer>
                    <Label>Nome: </Label>
                    <Input required type='Text'></Input>

                    <Label>Sobrenome: </Label>
                    <Input required type='Text'></Input>



                    <Label>CPF: </Label>
                    <Input required type='text' pattern="[0-9]{11}" placeholder='Digite seu CPF (somente números)'></Input>

                    <Label>CEP: </Label>
                    <InputA required onChange={e => handleChangeCep(e)} value={valuecep} type='text'></InputA>
                    <BtnCep onClick={e => handleCepSubmit(e)} type='submit' >Buscar</BtnCep>



                    <Label>Bairro: </Label>
                    <Input required value={cepData.bairro} />

                    <Label>Cidade: </Label>
                    <Input required value={cepData.localidade} />

                    <Label>Estado: </Label>
                    <Input required value={cepData.uf} />

                    <Label>E-mail: </Label>
                    <Input required type='email' onChange={onchangeemail} value={valueemail}></Input>

                    <Label>Senha: </Label>
                    <Input onChange={onchangesenha} type='password' value={valuesenha}></Input>

                    <Label>Confirme sua senha: </Label>
                    <Input onChange={onchangesenhaconfirma} type='password' value={valuesenhaconfirma}></Input>
                </FormDataContainer>
                <FormBtnContainer>
                    <BtnClear type='submit'>LIMPAR </BtnClear>
                    <BtnSend type='submit'>CADASTRAR </BtnSend>
                </FormBtnContainer>
            </Form>
        </MotherBox>
    )

} export default Cadastro;