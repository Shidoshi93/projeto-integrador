import ViaCep from 'react-via-cep'
import { useState } from 'react'

function Cep () {
    const [state, handleChangeCep] = useState('')

return (
<ViaCep cep = {state.cep} lazy>
                    { ({ data, loading, error, fetch }) => {
                    if (loading) {
                    return <p>loading...</p>
                                 }
                    if (error) {
                    return <p>error</p>
                                }
                    if (data) {
                    return <div>
                                <p>
                                    CEP: {data.cep} <br/>
                                    CIDADE: {data.localidade} <br/>
                                    UF: {data.uf} <br/>
                                </p>
                    </div>
                    }
                    return <div>
                                <input onChange={handleChangeCep} value={state.cep} placeholder="CEP" type="text"/>
                                <button onClick={fetch}>Pesquisar</button>
                    </div>
                    }}
                </ViaCep>
)


}

export default Cep;