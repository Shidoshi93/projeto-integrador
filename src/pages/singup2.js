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
  
} from '../components/singup2/singup2Style';

import {  
   BtnSend,
   BtnClear
} from '../styles/buttonStyle';


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
                        valueTipo.map(tipo=>{
                        return(<option>{tipo} </option>)})
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



