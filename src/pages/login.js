// Página de login
import {useState} from 'react'
import React from 'react';

import {
    MotherBox,
    Input,
    Button, 
    Title,
    Ancora, 

} from '../components/loginStyle'

function Login() {
    const [valuemail, setvaluemail] = useState()
    const [valuesenha, setvaluesenha] = useState()

    const onchangeemail = (event) => {

            setvaluemail(event.target.value)
            console.log(valuemail)
    } 
    
    const onchangesenha = (event) => {

        setvaluesenha(event.target.value)
        console.log(valuesenha)
} 
    return(
       <MotherBox> 
            <Title>LOGIN</Title> 
            <form> 
                <Input onChange={onchangeemail} value={valuemail} placeholder="Email"></Input>
                <Input type='password' onChange={onchangesenha} value={valuesenha} placeholder="Senha"></Input>
                <Button type='submit'>
                    Entrar
                </Button>
                <Ancora href="">Cadastrar</Ancora>
            </form> 
        </MotherBox> 
        
    )

} export default Login