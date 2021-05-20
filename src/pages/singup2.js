/* Tela de Cadastro de Doações */

import { useState } from 'react'

function CadastroDoacao() {
const valueEstado= [" Acre","Alogoas","Amapa","Amazonas","Bahia", "Ceará", "Distrito Federa", 
"Espírito Santo", "Goiás","Maranhã", "Mato Grosso","Mato Grosso do Sul","Minas Gerais",
"Para","Paraíba", "Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte",
 "Rio Grande do Sul", "Rondônia", "Roraima","Santa Catarina", "São Paulo", "Sergipe","Tocantins"]
 const valueTipo= ["Alimentos Perecíveis","Vestuário","Produtos de Higiêne"]
    return (  
    <div>
     
    <form>
        
       <label> Estado </label> 
       <select> {valueEstado.map(estado=>{
          return(
          <option>{estado} </option>)})} </select>
       <label> Cidade</label>
       <input></input>
       <label>Tipode de Doação</label>
        <select>{valueTipo.map(tipo=>{
          return(
          <option>{tipo} </option>)})} </select>
          <button type="submit"> Enviar </button>
    </form>
    </div>)
} export default CadastroDoacao



