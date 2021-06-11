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
       
} from '../components/singup/newpasswordStyle'


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
                <p>Insira seu e-mail e enviaremos um link para você voltar a acessar sua conta</p>
                    <Label>E-mail: </Label>
                    <Input  onChange={onchangeemail} value={valueemail}></Input> 
                    <FormBtnContainer>
                            <BtnSend type='submit'>Enviar link para login</BtnSend>
                    </FormBtnContainer>
                </FormDataContainer>
            </ContainerForm>

        </MotherBox>
    )

} export default Recadastro;