// Página de login
import {useState} from 'react'
import React from 'react';

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
        <div>
            Página de Login 
            <form >
                <label>
                    Email:
                </label>
                <input onChange={onchangeemail} value={valuemail}></input>
                <label>
                    Senha:
                </label>
                <input type='password' onChange={onchangesenha} value={valuesenha}></input>
                <button type='submit'>
                    Acessar
                </button>
            </form>
        </div>
    )

} export default Login