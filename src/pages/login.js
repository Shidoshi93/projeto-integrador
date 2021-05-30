// Página de login
import { useState } from 'react'
import React from 'react';

import {
    MotherBox,
    Input,
    Button,
    Title,
    Ancora,
    Form
} from '../components/loginStyle'
import { goTo } from '../routes/coordinator';
import { useHistory } from 'react-router';

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
            <Title>LOGIN</Title>
            <Form action='#'>
                <Input
                    type="email"
                    onChange={onchangeemail}
                    value={valuemail}
                    placeholder="Email"
                    required="required"
                >
                </Input>
                <Input
                    type='password'
                    onChange={onchangesenha}
                    value={valuesenha} placeholder="Senha"
                    required="required"
                >
                </Input>
                <Button type='submit' onClick={() => goTo(history, '/feed')}>
                    Entrar
                </Button>
                <p>Não tem uma conta?</p>
                <Ancora onClick={() => goTo(history, '/signup', props.toggleMiniMenu)}>Cadastre-se</Ancora>
            </Form>
        </MotherBox>
    )

} export default Login