import React from 'react';
import { useState } from 'react';
import {
    MotherBox,
    ContainerTitle,
    ContainerForm,
    FormDataContainer,
    Title,
    Label,
    Input,
    FormBtnContainer,
    P,
       
} from '../styles/newpasswordStyle'

import {
    BtnSend,
    
} from '../styles/buttonStyle'


function Recadastro() {
    const [valueemail, setvalueemail] = useState('')
    
    const onchangeemail = (event) => {
        setvalueemail(event.target.value)
        console.log(valueemail)
    } 


    return (
        <MotherBox>
            
            <ContainerTitle>
                <Title>Recuperar Senha</Title>
            </ContainerTitle>
                <FormDataContainer>
                <P>Insira seu e-mail e enviaremos um link <br></br> para você voltar a acessar sua conta.</P>
                    <Label>E-mail: </Label>
                    <Input  onChange={onchangeemail} value={valueemail}></Input> 
                    <BtnSend type='submit'>Enviar link</BtnSend>
                    
                </FormDataContainer>
        </MotherBox>
    )

} export default Recadastro;