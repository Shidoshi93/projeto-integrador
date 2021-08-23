import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
    MotherBox,
    Form,
    FormDataContainer,
    Label,
    Input,
    FormBtnContainer

} from './signupStyle';

import { Titulo } from '../../styles/titleStyle'

import {
    BtnSend,
    BtnClear
} from '../../styles/buttonStyle'
import AddressModal from './adressModal';
import { BASE_URL } from '../../constants/constants';


function Cadastro() {
    const [valueemail, setvalueemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const [valuesenhaconfirma, setvaluesenhaconfirma] = useState('')
    const [modal, setModal] = useState(true)
    const [nome, setNome] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [userId, setUserId] = useState()

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

    const handleNome = (event) => {
        setNome(event.target.value)
        console.log(nome)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleCpf = (event) => {
        setCpf(event.target.value)
    }

    //captura, converte a imagem para base64 e salva no localStorage
    const onchangeFoto = (event) => {
        const file = event.target.files

        let reader = new FileReader()
        reader.readAsDataURL(file[0])

        reader.onload = (event) => {
            let item = event.target.result
            console.log('foto', event.target.result)
            localStorage.setItem('userFoto', item)
        }
    }
    const bodyUser = {
        user_name: nome,
        email: valueemail,
        cpf: cpf,
        cellphone: phone,
        user_img: localStorage.getItem('userFoto') ? localStorage.getItem('userFoto') : null,
        password: valuesenhaconfirma
    }
    const signupContinue = (event) => {
        event.preventDefault()
        setModal(false)

        axios.post(`${BASE_URL}/user/save`, bodyUser)
            .then((res) => {
                console.log(res.data)
                setUserId(res.data.id)
             })
            .catch((err) => {
                console.log(err)
            })
    }   

    return (
        <MotherBox>

            <Titulo>Cadastre-se</Titulo>

            {modal ? <Form>
                <FormDataContainer>
                    <Label
                        htmlFor='nome'
                    >Nome completo: </Label>
                    <Input
                        required
                        type='Text'
                        name='nome'
                        id='nome'
                        value={nome}
                        onChange={handleNome}
                    ></Input>

                    <Label
                        htmlFor='telefone'
                    >Telefone: </Label>
                    <Input
                        required
                        type='Text'
                        name='telefone'
                        id='telefone'
                        value={phone}
                        onChange={handlePhone}
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
                        value={cpf}
                        onChange={handleCpf}
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
                <AddressModal 
                email={valueemail}
                userId={userId}
                password={valuesenhaconfirma}
                />
            }
        </MotherBox>
    )

} export default Cadastro;