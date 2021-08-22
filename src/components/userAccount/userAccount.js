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

    useEffect(() => {
        getUser()
    }, [])

    const token = localStorage.getItem("token");
    let decoded = jwt_decode(token);

    const email = decoded.sub;

    const getUser = async () => {
        await axios.get(`${BASE_URL}/user/?email=${email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setUser(res.data)
                setUserId(res.data.id)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            });
    }



    const history = useHistory()

    const [showForm, setShowForm] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const [showChangePassword, setShowChangePassword] = useState(false);

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
    }, [user]);

    const getAddress = async () => {
        await axios.get(`${BASE_URL}/address/userId/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setAddress(res.data)
                console.log(res.data)
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
                        <ImgContainer id='userFoto' src={fotoUser ? fotoUser : userFotoDefault} alt={user ? user.user_name : "Carregando dados do usuário..."} />
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
                                        <Input value={user ? user.user_name : "Carregando dados do usuário..."} />
                                        <Label>Telefone: </Label>
                                        <Input value={user ? user.cellphone : "Carregando dados do usuário..."} />
                                        <Label>CPF: </Label>
                                        <Input value={user ? user.cpf : "Carregando dados do usuário..."} />
                                        <Label>E-mail: </Label>
                                        <Input value={user ? user.email : "Carregando dados do usuário..."} />
                                        <Label>CEP: </Label>
                                        <Input value={address ? address.postalCode : "Carregando dados do usuário..."} />
                                        <Label>Cidade: </Label>
                                        <Input value={address ? address.city : "Carregando dados do usuário..."} />
                                        <Label>Estado: </Label>
                                        <Input value={address ? address.state : "Carregando dados do usuário..."} />
                                        <Label>Bairro: </Label>
                                        <Input value={address ? address.neighborhood : "Carregando dados do usuário..."} />
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

            )

        </div>
    )
}
export default UserAccount;