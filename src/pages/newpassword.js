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
    BtnSend,
    P,
       
} from '../styles/newpasswordStyle'


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

            <ContainerForm >
                
                <FormDataContainer>
                <P>Insira seu e-mail e enviaremos um link <br></br> para você voltar a acessar sua conta</P>
                    <Label>E-mail: </Label>
                    <Input  onChange={onchangeemail} value={valueemail}></Input> 
                    <FormBtnContainer>
                            <BtnSend type='submit'>Enviar link</BtnSend>
                    </FormBtnContainer>
                </FormDataContainer>
            </ContainerForm>

        </MotherBox>
    )

} export default Recadastro;