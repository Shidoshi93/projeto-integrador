import React, { useRef, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
    MainContainer,
    Form,
    FormDataContainer,
    Label,
    Input,
    InputA,
    BtnForm,
    BtnCep,
    CloseModalButton
} from './styleModal'
import { BASE_URL } from '../../constants/constants';
import jwt_decode from 'jwt-decode';
import { goTo } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

export const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef();
    const [valuecep, setvaluecep] = useState('')
    const [cepData, setCepData] = useState({})
    const [cep, setCep] = useState('');
    const [valueemail, setvalueemail] = useState('')
    const [nome, setNome] = useState('')
    const [phone, setPhone] = useState('')
    const [valuesenha, setvaluesenha] = useState('')
    const [valuesenhaconfirma, setvaluesenhaconfirma] = useState('')
    const [address, setAddress] = useState();
    const [addressId, setAddressId] = useState();
    const [bairro, setBairro] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    function handleChangeCep(event) {
        setCep(event.target.value)
    }

    function handleCepSubmit(event) {
        event.preventDefault();

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                setCepData(res.data)
                setBairro(res.data.bairro)
                setCity(res.data.localidade)
                setState(res.data.uf)
            })
            .catch(erro => alert('Não foi possível localizar esse CEP'));
    }

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
                setNome(res.data.user_name)
                setPhone(res.data.cellphone)
                setvalueemail(res.data.email)
                localStorage.setItem("userFoto", (res.data.user_img));
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    const onchangesenha = (event) => {
        setvaluesenha(event.target.value)
    }

    const onchangesenhaconfirma = (event) => {
        setvaluesenhaconfirma(event.target.value)
    }

    const onchangeemail = (event) => {
        setvalueemail(event.target.value)
    }
    const handleNome = (event) => {
        setNome(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const onchangebairro = (event) => {
        setBairro(event.target.value)
    }

    const onchangecity = (event) => {
        setCity(event.target.value)
    }

    const onchangestate = (event) => {
        setState(event.target.value)
    }

    //IMG HANDLER (captura, converte a imagem para base64 e salva no localStorage)
    const onchangeFoto = (event) => {
        const file = event.target.files

        let reader = new FileReader()
        reader.readAsDataURL(file[0])

        reader.onload = (event) => {
            let item = event.target.result
            localStorage.setItem('userFoto', item)
        }
    }

    //GET USER ADDRESS
    useEffect(() => {
        getAddress()
    }, [userId]);

    const getAddress = async () => {
        await axios.get(`${BASE_URL}/address/userId/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setAddress(res.data)
                setCep(res.data.postalCode)
                setAddressId(res.data.id)
                setBairro(res.data.neighborhood)
                setCity(res.data.city)
                setState(res.data.city)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    //UPDATE HANDLER

    const bodyUser = {
        user_name: nome,
        email: valueemail,
        cellphone: phone,
        user_img: localStorage.getItem('userFoto'),
        password: valuesenhaconfirma,
    }

    const bodyAddress = {
        neighborhood: bairro,
        city: city,
        state: state,
        postalCode: cep,
        user: {
            id: userId
        },
    }

    const updateUser = (e) => {
        e.preventDefault()

        axios.patch(`${BASE_URL}/user/${userId}`, bodyUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                alert("Cadastro atualizado")
                setShowModal(false)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.patch(`${BASE_URL}/address/${addressId}`, bodyAddress, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {showModal ? (
                <MainContainer onClick={closeModal} ref={modalRef}>
                    <CloseModalButton onClick={() => setShowModal(prev => !prev)}>
                        X
                    </CloseModalButton>
                    <Form showModal={showModal}>
                        <FormDataContainer>
                            <Label htmlFor='nome'>Nome completo: </Label>
                            <Input
                                type='Text'
                                name='nome'
                                id='nome'
                                value={nome}
                                placeholder={user.user_name}
                                onChange={handleNome}></Input>

                            <Label
                                htmlFor='foto'
                            >Foto: </Label>
                            <Input
                                type='file'
                                accept="image/png, image/jpeg"
                                placeholder='Insira sua foto'
                                name='foto'
                                id='foto'
                                onChange={(event) => onchangeFoto(event)}
                            ></Input>
                            <Label
                                htmlFor='telefone'
                            >Telefone: </Label>
                            <Input
                                type='Text'
                                name='telefone'
                                id='telefone'
                                value={phone}
                                placeholder={user.cellphone}
                                onChange={handlePhone}
                            ></Input>
                            <Label htmlFor='email'>E-mail: </Label>
                            <Input
                                type='email'
                                onChange={onchangeemail}
                                value={valueemail}
                                placeholder={user.email}
                                name='email' id='email'></Input>
                            <Label>CEP: </Label>
                            <div>
                                <InputA
                                    type="text"
                                    onChange={e => handleChangeCep(e)}
                                    value={cep}
                                    placeholder={address ? address.postalCode : "Carregando dados do usuário..."} />
                                <BtnCep type="submit" onClick={e => handleCepSubmit(e)}>Pesquisar</BtnCep>
                            </div>
                            <Label>Bairro: </Label>
                            <Input value={cepData.bairro}
                                placeholder={address ? address.neighborhood : "Carregando dados do usuário..."}
                                onChange={onchangebairro} />
                            <Label>Cidade: </Label>
                            <Input value={cepData.localidade}
                                onChange={onchangecity}
                                placeholder={address ? address.city : "Carregando dados do usuário..."} />
                            <Label>Estado: </Label>
                            <Input value={cepData.uf}
                                onChange={onchangestate}
                                placeholder={address ? address.state : "Carregando dados do usuário..."} />
                            <Label htmlFor='senha'>Senha: </Label>
                            <Input
                                required
                                onChange={onchangesenha}
                                type='password'
                                value={valuesenha}
                                name='senha' id='senha'></Input>

                            <Label htmlFor='confSenha'>Confirme sua senha: </Label>
                            <Input
                                required
                                onChange={onchangesenhaconfirma}
                                type='password' value={valuesenhaconfirma}
                                name='confSenha' id='confSenha'></Input>
                        </FormDataContainer>
                        <BtnForm onClick={updateUser}>ALTERAR</BtnForm>
                    </Form>

                </MainContainer>
            ) : null}
        </>
    );
};