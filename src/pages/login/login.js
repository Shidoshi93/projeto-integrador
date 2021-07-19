// Página de login
import { useState } from 'react'
import React from 'react';
import { goTo } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import {
    MotherBox,
    HeadContainer,
    HeadBtnContainer,
    BtnHead,
    Form,
    FormDataContainer,
    Label,
    Input,
    FormBtnContainer
} from './loginStyle';
import {Titulo} from '../../styles/titleStyle'

import {
    BtnSend
} from '../../styles/buttonStyle'


function Login(props) {
    const [valuemail, setvaluemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const history = useHistory()

    const onchangeemail = (event) => {

        setvaluemail(event.target.value)
        console.log(valuemail)
    }

    const onchangesenha = (event) => {

        setvaluesenha(event.target.value)
        console.log(valuesenha)
    }
    return (
        <MotherBox>
            <Titulo>LOGIN</Titulo>
          
            <Form action='#'>
            <FormDataContainer>
                <Label>Email: </Label>
                <Input
                    type="email"
                    onChange={onchangeemail}
                    value={valuemail}
                    placeholder="Digite o email cadastrado"
                    required="required"
                />
               
                <Label>Senha: </Label>
                <Input
                    type='password'
                    onChange={onchangesenha}
                    value={valuesenha} placeholder="Digite sua senha"
                    required="required"
                />
               </FormDataContainer>

                <FormBtnContainer>
                <BtnSend type='submit' onClick={() => goTo(history, '/feed')}>
                    Entrar
                </BtnSend>
                
                </FormBtnContainer>
            </Form>
            <HeadContainer>
                
                <BtnHead onClick={() => goTo(history, '/newpassword')}>Esqueceu a senha?</BtnHead>
                <BtnHead onClick={() => goTo(history, '/signup')}>Cadastre-se</BtnHead>
            
            </HeadContainer>
        </MotherBox>
    )

} export default Login