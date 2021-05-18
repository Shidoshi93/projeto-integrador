import { useState } from 'react'

function Cadastro() {
    const [valuemail, setvaluemail] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const [valuesenhaconfirma, setvaluesenhaconfirma] = useState('')

    const onchangeemail = (event) => {

        setvaluemail(event.target.value)
        console.log(valuemail)
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
        <div>
            Cadastro do Usuário
            <form >
                <label>
                    Email:
                </label>
                <input onChange={onchangeemail} value={valuemail}></input>
                <label>
                    Senha:
                </label>
                <input type='password' onChange={onchangesenha} value={valuesenha}></input>

                <label>
                    Confirme a Senha:
                </label>
                <input type='password' onChange={onchangesenhaconfirma} value={valuesenhaconfirma}></input>

                <button type='submit'>
                    Cadastrar
                </button>
            </form>
        </div>
    )

} export default Cadastro;