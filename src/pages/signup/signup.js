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

import { Titulo } from '../../styles/titleStyle'

import {
    BtnSend,
    BtnClear
} from '../../styles/buttonStyle'
import { goTo } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import AddressModal from './adressModal';
import { render } from '@testing-library/react';


function Cadastro() {
    const [valueemail, setvalueemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const [valuesenhaconfirma, setvaluesenhaconfirma] = useState('')
    const [valuecep, setvaluecep] = useState('')
    const [cepData, setCepData] = useState({})
    const [modal, setModal] = useState(true)
    const history = useHistory()

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

    //captura e converte a imagem para base64
    const onchangeFoto = (event) => {
        const file = event.target.files

        let reader = new FileReader()
        reader.readAsDataURL(file[0])

        reader.onload = (event) => {
            let item = event.target.result
            console.log('foto', event.target.result)

            //criando o link da imagem com base no base64 da imagem
            let userPhoto = document.getElementById('userPhoto')
            userPhoto.setAttribute('src', item)
        }
    }

    const signupContinue = () => {
        setModal(false)
    }

    return (
        <MotherBox>

            <Titulo>Cadastre-se</Titulo>

            {modal ? <Form>
                <FormDataContainer>
                    <Label
                        htmlFor='nome'
                    >Nome: </Label>
                    <Input
                        required
                        type='Text'
                        name='nome'
                        id='nome'
                    ></Input>

                    <Label
                        htmlFor='sobrenome'
                    >Sobrenome: </Label>
                    <Input
                        required
                        type='Text'
                        name='sobrenome'
                        id='sobrenome'
                    ></Input>

                    <Label
                        htmlFor='foto'
                    >Foto: </Label>
                    <Input
                        required
                        type='file'
                        accept="image/png, image/jpeg"
                        placeholder='Insira sua foto'
                        name='foto'
                        id='foto'
                        type="file"
                        onChange={(event) => onchangeFoto(event)}
                    ></Input>

                    <Label
                        htmlFor='cpf'
                    >CPF: </Label>
                    <Input
                        required
                        type='text'
                        pattern="[0-9]{11}"
                        placeholder='Digite seu CPF (somente números)'
                        name='cpf'
                        id='cpf'
                    ></Input>

                    <Label htmlFor='email'>E-mail: </Label>
                    <Input required type='email' onChange={onchangeemail} value={valueemail} name='email' id='email'></Input>

                    <Label htmlFor='senha'>Senha: </Label>
                    <Input onChange={onchangesenha} type='password' value={valuesenha} name='senha' id='senha'></Input>

                    <Label htmlFor='confSenha'>Confirme sua senha: </Label>
                    <Input onChange={onchangesenhaconfirma} type='password' value={valuesenhaconfirma} name='confSenha' id='confSenha'></Input>
                </FormDataContainer>
                <FormBtnContainer>
                    <BtnClear type='submit'>LIMPAR</BtnClear>
                    <BtnSend type='submit' onClick={signupContinue}>CONTINUAR</BtnSend>
                </FormBtnContainer>
            </Form> :
                <AddressModal />
            }

            {/*Teste da imagem*/}
            <img id='userPhoto' style={{ width: '50px' }} />
        </MotherBox>
    )

} export default Cadastro;