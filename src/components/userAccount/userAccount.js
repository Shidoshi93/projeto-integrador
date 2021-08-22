import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import '../../../src/fonts.css';
import { goTo } from '../../routes/coordinator';
import { Modal } from './modal';
import { ChangePassword } from './changePassword';
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
import userFotoDefault from '../../images/userphoto.png'

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

    const fotoUser = localStorage.getItem('userFoto')

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const [showChangePassword, setShowChangePassword] = useState(false);

    const openChangePassword = () => {
        setShowChangePassword(prev => !prev);
    };


    useEffect(() => {
        if (showModal || showChangePassword ? setShowForm(false) : setShowForm(true));;
    }, [showModal, showChangePassword]);

    return (
        <div>
            {userData.map((user) => (
                <MotherBox>
                    <HeadContainer>
                        <HeadUserContainer>
                            <ImgContainer id='userFoto' src={fotoUser ? fotoUser : userFotoDefault} alt={user.userFullName} />
                            <Title>{user.userFullName}</Title>
                        </HeadUserContainer>
                        <HeadBtnContainer>
                            <BtnHead onClick={() => goTo(history, '/donation')}>FAZER DOAÇÃO</BtnHead>
                            <BtnHead onClick={() => goTo(history, '/donation')}>PEDIR DOAÇÃO</BtnHead>
                        </HeadBtnContainer>
                    </HeadContainer>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                    <ChangePassword showChangePassword={showChangePassword} setShowChangePassword={setShowChangePassword} />
                    {showForm &&
                        <>
                            <MainContainer >
                                <CardContainer>

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
                                </CardContainer>
                            </MainContainer>
                            <FormBtnContainer>
                                <BtnForm onClick={openModal}>ALTERAR CADASTRO</BtnForm>
                                <BtnForm onClick={openChangePassword}>ALTERAR SENHA</BtnForm>

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