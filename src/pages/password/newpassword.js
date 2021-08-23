import React from 'react';
import { useState } from 'react';
import {
    MotherBox,
    Container,
    FormDataContainer,
    Label,
    Input,
    P
} from './newpasswordStyle'

import { Titulo } from '../../styles/titleStyle';

import {
    BtnSend,

} from '../../styles/buttonStyle'


function Recadastro() {
    const [valueemail, setvalueemail] = useState('')

    const onchangeemail = (event) => {
        setvalueemail(event.target.value)
        console.log(valueemail)
    }


    return (
        <MotherBox>
            <Container>
                <Titulo>Recuperar Senha</Titulo>

                <FormDataContainer>
                    <P>Insira seu e-mail e enviaremos um link <br></br> para você voltar a acessar sua conta.</P>
                    <Label>E-mail: </Label>
                    <Input onChange={onchangeemail} value={valueemail}></Input>
                    <BtnSend type='submit'>Enviar link</BtnSend>

                </FormDataContainer>
            </Container>
        </MotherBox>
    )

} export default Recadastro;