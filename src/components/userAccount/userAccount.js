import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import '../../../src/fonts.css';
import { goTo } from '../../routes/coordinator';
import { Modal } from './modal';
import {
    MotherBox,
    HeadContainer,
    HeadUserContainer,
    ImgContainer,
    Title,
    HeadBtnContainer,
    BtnHead,
    MainContainer,
    CardContainer,
    Form,
    FormDataContainer,
    Label,
    Input,
    FormBtnContainer,
    BtnForm
} from './styleUserAccount'

function UserAccount() {

    const history = useHistory()
    const userData = [
        {
            "userName": "Rachel",
            "userLastname": "Carvalho",
            "userFullName": "Rachel Carvalho",
            "email": "rachelacarvalho@gmail.com",
            "key": "Rachel123",
            "bairro": "Marechal Hermes",
            "cep": "21555-500",
            "localidade": "Rio de Janeiro",
            "uf": "RJ",
            "cpf": "07889998899",
            "img": "http://placekitten.com/200/200"
        }]

        const [showForm, setShowForm] = useState(true);

        const [showModal, setShowModal] = useState(false);

        const openModal = () => {
          setShowModal(prev => !prev);
        };

        useEffect(()=> {
            if (showModal ? setShowForm(false) : setShowForm(true));;
          }, [showModal]);
       
    return (
        <div>
            {userData.map((user) => (
                <MotherBox>
                    <HeadContainer>
                        <HeadUserContainer>
                            <ImgContainer src={user.img} alt={user.userFullName} />
                            <Title>{user.userFullName}</Title>
                        </HeadUserContainer>
                        <HeadBtnContainer>
                            <BtnHead onClick={() => goTo(history, '/donation')}>FAZER DOAÇÃO</BtnHead>
                            <BtnHead onClick={() => goTo(history, '/donation')}>PEDIR DOAÇÃO</BtnHead>
                        </HeadBtnContainer>
                    </HeadContainer>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                    {showForm &&
                    <>
                    <MainContainer >
                        <CardContainer />

                        <Form>
                            <FormDataContainer>
                                <Label>Nome completo: </Label>
                                <Input value={user.userFullName} />
                                <Label>CPF: </Label>
                                <Input value={user.cpf} />
                                <Label>E-mail: </Label>
                                <Input value={user.email} />
                                <Label>CEP: </Label>
                                <Input value={user.cep} />
                                <Label>Cidade: </Label>
                                <Input value={user.localidade} />
                                <Label>Estado: </Label>
                                <Input value={user.uf} />
                                <Label>Bairro: </Label>
                                <Input value={user.bairro} />
                            </FormDataContainer>
                        </Form>
                    </MainContainer>
                        <FormBtnContainer>
                                <BtnForm onClick={openModal}>ALTERAR CADASTRO</BtnForm>
                                <BtnForm onClick={() => goTo(history, '/newpassword')}>ALTERAR SENHA</BtnForm>
                                
                        </FormBtnContainer>
                    </>
                    }
                </MotherBox>
            )
            )}

        </div>
    )
}
export default UserAccount;