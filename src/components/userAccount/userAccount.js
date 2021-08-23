import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
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
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import jwt_decode from 'jwt-decode';


function UserAccount() {
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();
    const [address, setAddress] = useState();
    const [showForm, setShowForm] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getUser()
    }, [showModal])

    const token = localStorage.getItem("token");
    let decoded = jwt_decode(token);

    const email = decoded.sub;

    const getUser = () => {
        axios.get(`${BASE_URL}/user/?email=${email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setUser(res.data)
                setUserId(res.data.id)
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    const history = useHistory()

    const fotoUser = localStorage.getItem('userFoto')

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const openChangePassword = () => {
        setShowChangePassword(prev => !prev);
    };

    useEffect(() => {
        if (showModal || showChangePassword ? setShowForm(false) : setShowForm(true));
    }, [showModal, showChangePassword]);


    useEffect(() => {
        getAddress()
    }, [userId]);


    const getAddress = () => {
        axios.get(`${BASE_URL}/address/userId/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setAddress(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <MotherBox>
                <HeadContainer>
                    <HeadUserContainer>
                        <ImgContainer id='userFoto' src={user && user.user_img ? user.user_img : userFotoDefault} alt={user && user.user_name} />
                        <Title>{user ? user.user_name : "Carregando dados do usuário..."}</Title>
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
                                        <Input value={user && user.user_name} />
                                        <Label>Telefone: </Label>
                                        <Input value={user && user.cellphone} />
                                        <Label>CPF: </Label>
                                        <Input value={user && user.cpf} />
                                        <Label>E-mail: </Label>
                                        <Input value={user && user.email} />
                                        <Label>CEP: </Label>
                                        <Input value={address ? address.postalCode : 'Caregando dados do usuário'} />
                                        <Label>Cidade: </Label>
                                        <Input value={address ? address.city : 'Caregando dados do usuário'} />
                                        <Label>Estado: </Label>
                                        <Input value={address ? address.state : 'Caregando dados do usuário'} />
                                        <Label>Bairro: </Label>
                                        <Input value={address ? address.neighborhood : 'Caregando dados do usuário'} />
                                    </FormDataContainer>
                                </Form>
                            </CardContainer>
                        </MainContainer>
                        <FormBtnContainer>
                            <BtnForm onClick={openModal}>ALTERAR CADASTRO</BtnForm>
                        </FormBtnContainer>
                    </>
                }
            </MotherBox>
        </div>
    )
}
export default UserAccount;