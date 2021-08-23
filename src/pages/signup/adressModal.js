import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    AddressContainer,
    ContainerCep
} from './signupStyle'
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
} from '../../components/UserAccount/styleModal'
import { BASE_URL } from '../../constants/constants';
import { useHistory } from 'react-router';
import { goTo } from '../../routes/coordinator';


const AddressModal = (props) => {

    const [cepData, setCepData] = useState({})
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();


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

    const onchangebairro = (event) => {
        setBairro(event.target.value)
    }

    const onchangecity = (event) => {
        setCity(event.target.value)
    }

    const onchangestate = (event) => {
        setState(event.target.value)
    }

    const history = useHistory()


    //LOGIN
    const login = (event) => {
        event.preventDefault()

        const bodyAddress = {
            neighborhood: bairro,
            city: city,
            state: state,
            postalCode: cep,
            user: {
                id: props.userId
            },
        }

        axios.post(`${BASE_URL}/address/save`, bodyAddress)
            .then((res) => {
                console.log("Endreço salvo com sucesso!")
            })
            .catch((err) => {
                console.log(err)
            })

        const body = {
            email: props.email,
            password: props.password
        };

        axios
            .post(
                `${BASE_URL}/login`,
                body
            )
            .then((res) => {
                localStorage.setItem("token", res.headers.token);
                alert("Cadastro concluído com sucesso!")
                goTo(history, "/feed")
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (

        <Form>
            <FormDataContainer>
                <Label>CEP: </Label>
                <div>
                    <InputA
                        type="text"
                        onChange={e => handleChangeCep(e)}
                        value={cep}
                        placeholder="Digite seu CEP" />
                    <BtnCep type="submit" onClick={e => handleCepSubmit(e)}>Pesquisar</BtnCep>
                </div>
                <Label>Bairro: </Label>
                <Input value={cepData.bairro}
                    onChange={onchangebairro} />
                <Label>Cidade: </Label>
                <Input value={cepData.localidade}
                    onChange={onchangecity} />
                <Label>Estado: </Label>
                <Input value={cepData.uf}
                    onChange={onchangestate} />
            </FormDataContainer>
            <BtnForm onClick={login}>CADASTRAR</BtnForm>
        </Form>
    )
}
export default AddressModal