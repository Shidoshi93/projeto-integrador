// Página de login
import React from 'react'
import { useState, useEffect } from 'react'
import { goTo } from '../../routes/coordinator'
import { useHistory } from 'react-router'
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
import { Titulo } from '../../styles/titleStyle'

import {
    BtnSend
} from '../../styles/buttonStyle'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants';


function Login(props) {
    const [valuemail, setvaluemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
          goTo(history, '/feed');
        }
      }, [history]);

    const onchangeemail = (event) => {
        setvaluemail(event.target.value)
    }

    const onchangesenha = (event) => {
        setvaluesenha(event.target.value)
    }

    const login = async (event) => {
        event.preventDefault()

        const body = {
            email: valuemail,
            password: valuesenha
        };

        await axios
            .post(
                `${BASE_URL}/login`,
                body
            )
            .then((res) => {
                localStorage.setItem("token", res.headers.token);
                const storageEmail = localStorage.getItem('email')
                if(storageEmail) {
                    localStorage.removeItem('email')
                }
                localStorage.setItem('email', valuemail)
                goTo(history, '/feed')
            })
            .catch((err) => {
                console.log(err);
                alert('Senha ou e-mail incorretos, tente novamente.')
            });
    };

    return (
        <MotherBox>
            <Titulo>LOGIN</Titulo>

            <Form>
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
                    <BtnSend type="submit" onClick={login}>
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