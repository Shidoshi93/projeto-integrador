import React, { useEffect, useState } from 'react';
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
import axios from 'axios';


function CadastroDoacao() {

   const [userType, setUserType] = useState()
   const [valueDonationType, setDonationType] = useState()
   const [qtd, setQtd] = useState()
   const [description, setDescription] = useState()
   const [email, setEmail] = useState()
   const [userId, setUserId] = useState()
   const [addressId, setAddressId] = useState()

   const token = localStorage.getItem('token')
   const storageEmail = localStorage.getItem('email')
   useEffect(() => {
      setEmail(storageEmail)
      if(email) {
         getUserByEmail()
      }

      if(userId) {
         getAddressByUserId()
      }
   })

   const valueCategoria = ["beneficiário", "doador"]
   const donationType = [
      { item: "Cesta Básica", value: "cesta básica" },
      { item: "Vestuário", value: "vestuário" },
      { item: "Produtos de Higiêne", value: "kit higiene" }
   ]
   function criaOption() {
      let arrayOption = [];
      for (let i = 1; i <= 10; i++) {
         arrayOption.push(i);
      }
      return arrayOption;
   }

   const arrayOptions = criaOption();

   const handleUserType = (e) => {
      setUserType(e.target.value)
   }

   const handleDonationType = (e) => {
      setDonationType(e.target.value)
   }

   const handleQtd = (e) => {
      setQtd(e.target.value)
   }

   const handleDescription = (e) => {
      setDescription(e.target.value)
   }

   const handleClear = () => {
      setDescription('')
      setDonationType('')
      setQtd('')
      setUserType('')
   }

   const getUserByEmail = () => {
      axios.get(`http://localhost:8080/user/?email=${email}`)
         .then((res) => {
            setUserId(res.data.id)
         })
         .catch((err) => {
            console.log(err)
         })
   }

   const getAddressByUserId = () => {
      axios.get(`http://localhost:8080/address/userId/${userId}`)
         .then((res) => {
            setAddressId(res.data.id)
         })
         .catch((err) => {
            console.log(err)
         })
   }

   const sendDonation = (e) => {
      e.preventDefault()

      const body = {
         user_type: userType,
         donation_type: valueDonationType,
         description: description,
         qtd: qtd,
         status: 'ativo',
         user: {
            id: userId
         },
         address: {
            id: addressId
         }
      }

      axios.post("http://localhost:8080/post/save", body, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
         .then((res) => {
            alert(res.data)
            setDescription('')
            setDonationType('')
            setQtd('')
            setUserType('')
         })
         .catch((err) => {
            console.log(err)
         })
   }

   return (
      <Section>
         <Titulo>Peça ou Ofereça Doação</Titulo>

         <Form onSubmit={sendDonation}>
            <DivForm>
               <DivLabel>
                  <label> Tipo de Usuário </label>
                  <Select value={userType} onChange={handleUserType} defaultValue={userType}>
                     <option selected disabled>Selecione</option>
                     {
                        valueCategoria.map(userType => {
                           return (<option key={userType} value={userType}> {userType} </option>)
                        })
                     }
                  </Select>
               </DivLabel>
               <DivLabel>

                  <label>Tipo de Doação</label>
                  <Select value={valueDonationType} onChange={handleDonationType} defaultValue={valueDonationType}>
                     <option selected disabled>Selecione</option>
                     {
                        donationType.map(tipo => {
                           return (<option key={tipo.item + tipo.value} value={tipo.value}>{tipo.item} </option>)
                        })
                     }
                  </Select>
               </DivLabel>
               <DivLabel>

                  <label>Quantidade (Máx. 10)</label>
                  <Select onChange={handleQtd} >
                     <option selected disabled>Selecione</option>
                     {
                        arrayOptions.map(option => {
                           return (<option key={option} value={option}>{option}</option>)
                        })
                     }
                  </Select>
               </DivLabel>

               <label>Descrição</label>
               <Textarea onChange={handleDescription} placeholder="Campo destinado ao registro de informações complementares"></Textarea>

               <Span>Obs.: Realize um post para cada pedido/oferta de ajuda</Span>
            </DivForm>
            <BtnClear onClick={handleClear}>LIMPAR</BtnClear>
            <BtnSend type="submit">ENVIAR</BtnSend>
         </Form>
      </Section>)

} export default CadastroDoacao;



