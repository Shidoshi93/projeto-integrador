import React from 'react';
/* Tela de Cadastro de Doações */

import Titulo from '../components/Titulo';
// import { useState } from 'react'

function CadastroDoacao() {
   const valueCategoria= ["Beneficiário", "Doador"]
   const valueTipo= ["Alimentos Perecíveis","Vestuário","Produtos de Higiêne"]
   function criaOption(){
      let arrayOption = [];
      for(let i = 0; i < 10; i++){
         arrayOption.push(i);
      }
      return arrayOption;
   }

   const arrayOptions = criaOption();
 
   return (  
      <div>
         <Titulo/>  
         <form>
        
            <label> Tipo de Usuário </label> 
            <select> 
               {
                  valueCategoria.map(estado=>{
                  return(<option>{estado} </option>)})
               } 
            </select>
      
            <label>Tipo de Doação</label>
            <select>
               {
                  valueTipo.map(tipo=>{
                  return(<option>{tipo} </option>)})
               } 
            </select>

            <label>Quantidade</label>
            <select>
               {
                  arrayOptions.map(option => {
                  return ( <option>{option}</option>)}) 
               }
            </select>
      
            <label>Observação</label>
            <textarea placeholder="Campo destinado ao registro de informações complementares"></textarea>
      
            <span>*Realize um post para cada solicitação*</span>
            <button type="submit"> Enviar </button>
         </form>
      </div>)

} export default CadastroDoacao;



