import React from 'react';
import { useState } from 'react';
import Cep from '../components/singup/cep';
import {
    MotherBox,
    ContainerTitle,
    ContainerForm,
    Btn,
    BtnClear,
    Title,
    Label,
    Input
} from '../components/singup/signupStyle'


function Cadastro() {
    const [valuemail, setvaluemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const [valuesenhaconfirma, setvaluesenhaconfirma] = useState('')
   

    const onchangeemail = (event) => {

        setvaluemail(event.target.value)
        console.log(valuemail)
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
            <ContainerTitle><Title>Cadastre-se</Title></ContainerTitle>
            <ContainerForm >
                <Label>
                    Nome:
                </Label>
                <Input type={Text}></Input><br />

                <Label>
                    Sobrenome:
                </Label>
                <Input type={Text}></Input><br />

                <Label>
                    CPF:
                </Label>
                <Input type={Text} placeholder={"insira seu CPF (somente números)"} pattern={"[0-9]{11}"}></Input><br />

                <Cep></Cep>

                <Label>
                    Email:
                </Label>
                <Input onChange={onchangeemail} value={valuemail}></Input> <br />
                <Label>
                    Senha:
                </Label>
                <Input type='password' onChange={onchangesenha} value={valuesenha}></Input><br />

                <Label>
                    Confirme sua senha:
                </Label>
                <Input type='password' onChange={onchangesenhaconfirma} value={valuesenhaconfirma}></Input><br />

                <BtnClear type='submit'>
                    Limpar
                </BtnClear>
                <Btn type='submit'>
                    Cadastrar
                </Btn>
            </ContainerForm>

        </MotherBox>
    )

} export default Cadastro;