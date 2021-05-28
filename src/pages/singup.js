import React from 'react';
import { useState } from 'react';
import Cep from '../components/singup/cep';
import {
    MotherBox,
    ContainerTitle,
    ContainerForm,
    FormDataContainer,
    Title,
    Label,
    Input,
    InputA,
    BtnCep,
    FormBtnContainer,
    BtnSend,
    BtnClear
   
} from '../components/singup/signupStyle'


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
            
            <ContainerTitle>
                <Title>Cadastre-se</Title>
            </ContainerTitle>

            <ContainerForm >
                <FormDataContainer>
                   
                    <Label>Nome: </Label>
                    <Input type='Text'></Input>
                   
                    <Label>Sobrenome: </Label>
                    <Input type='Text'></Input>
                    
                    
                   
                    <Label>CPF: </Label>
                    <Input type='text' placeholder = 'Digite seu CPF (somente números)' pattern='[0-9]{11}'></Input>
                    
                    <Label>CEP: </Label>
                    <InputA onChange={e => handleChangeCep(e)} value={valuecep}type='text'placeholder='Digite seu CEP (somente números)' ></InputA>
                    <BtnCep   type='submit' >Buscar</BtnCep>
                    
                  
                   
                    <Label>Bairro: </Label>
                    <Input value={cepData.bairro} />
                    
                    <Label>Cidade: </Label>
                    <Input value={cepData.localidade} />
                    
                    <Label>Estado: </Label>
                    <Input value={cepData.uf} />
                    

                   
                    <Label>E-mail: </Label>
                    <Input  onChange={onchangeemail} value={valueemail}></Input> 
                    
                    <Label>Senha: </Label>
                    <Input onChange={onchangesenha} type='password'  value={valuesenha}></Input>
                   
                    <Label>Confirme sua senha: </Label>
                    <Input onChange={onchangesenhaconfirma}type='password' value={valuesenhaconfirma}></Input>
                    
                <FormBtnContainer>
                    <BtnClear type='submit'>Limpar </BtnClear>
                    <BtnSend type='submit'>Cadastrar </BtnSend>
                </FormBtnContainer>
                </FormDataContainer>
            </ContainerForm>

        </MotherBox>
    )

} export default Cadastro;