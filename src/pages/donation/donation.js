/* Tela de Cadastro de Doações */
import React from 'react';
import { 
   Section,
   Form,
   DivForm,
   DivLabel,
   Select,
   Textarea,
   Span,
   Titulo,
  
} from './donationStyle';

import {  
   BtnSend,
   BtnClear
} from '../../styles/buttonStyle';


function CadastroDoacao() {
   const valueCategoria= ["Beneficiário", "Doador"]
   const donationType = [
      {item: "Cesta Básica", value: "cesta básica"}, 
      {item: "Vestuário", value: "vestuário"},
      {item: "Produtos de Higiêne", value: "kit higiene"}
   ]
   function criaOption(){
      let arrayOption = [];
      for(let i = 0; i < 10; i++){
         arrayOption.push(i);
      }
      return arrayOption;
   }

   const arrayOptions = criaOption();
 
   return (

      <Section>
         <Titulo>Peça ou Ofereça Doação</Titulo>

         <Form>
            <DivForm>
               <DivLabel>
                  <label> Tipo de Usuário </label> 
                  <Select> 
                     <option selected disabled>Selecione</option>
                     {
                        valueCategoria.map(estado=>{
                        return(<option>{estado} </option>)})
                     } 
                  </Select>
               </DivLabel>
               <DivLabel>

                  <label>Tipo de Doação</label>
                  <Select>
                     <option selected disabled>Selecione</option>
                     {
                        donationType.map(tipo=>{
                        return(<option key={tipo} value={tipo.value}>{tipo.item} </option>)})
                     } 
                  </Select>
               </DivLabel>
               <DivLabel>

                  <label>Quantidade (Máx. 10)</label>
                  <Select>
                     <option selected disabled>Selecione</option>
                     {
                        arrayOptions.map(option => {
                        return ( <option>{option}</option>)}) 
                     }
                  </Select>
               </DivLabel>
      
               <label>Descrição</label>
               <Textarea placeholder="Campo destinado ao registro de informações complementares"></Textarea>
      
               <Span>Obs.: Realize um post para cada pedido/oferta de ajuda</Span>
            </DivForm>
            <BtnClear>LIMPAR </BtnClear>
            <BtnSend type="submit"> ENVIAR </BtnSend>
         </Form>
      </Section>)

} export default CadastroDoacao;



