/* Tela de Cadastro de Doações */
import React from 'react';
import Titulo from '../components/Titulo';
import '../signup2.css'

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

      <section>
         <Titulo title="Peça ou Ofereça Doação"/>

         <form>
            <div className="div__form">
               <div className="div__label">
                  <label> Tipo de Usuário </label> 
                  <select> 
                     <option selected disabled>Selecione</option>
                     {
                        valueCategoria.map(estado=>{
                        return(<option>{estado} </option>)})
                     } 
                  </select>
               </div>
               <div className="div__label">

                  <label>Tipo de Doação</label>
                  <select>
                     <option selected disabled>Selecione</option>
                     {
                        valueTipo.map(tipo=>{
                        return(<option>{tipo} </option>)})
                     } 
                  </select>
               </div>
               <div className="div__label">

                  <label>Quantidade (Máx. 10)</label>
                  <select>
                     <option selected disabled>Selecione</option>
                     {
                        arrayOptions.map(option => {
                        return ( <option>{option}</option>)}) 
                     }
                  </select>
               </div>
      
               <label>Descrição</label>
               <textarea placeholder="Campo destinado ao registro de informações complementares"></textarea>
      
               <span>Obs.: Realize um post para cada pedido/oferta de ajuda</span>
            </div>
            <button className="botao botao__limpar">LIMPAR</button>
            <button className="botao botao__enviar" type="submit"> ENVIAR </button>
         </form>
      </section>)

} export default CadastroDoacao;



