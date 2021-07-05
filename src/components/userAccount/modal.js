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

export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
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

    const [cep, setCep] = useState('');
    const [cepData, setCepData] = useState({});
    const [showCep, setShowCep] = useState(false);

    function handleChangeCep(event) {
        setCep (event.target.value)
    }

    function handleCepSubmit(event) {
        event.preventDefault();

        axios.get (`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.data)
        .then(res => setCepData(res), setShowCep(true))
        .catch(erro => alert('Não foi possível localizar esse CEP'));
        
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
                            <Label>Nome completo: </Label>
                            <Input placeholder="Rachel Carvalho" />
                            <Label>E-mail: </Label>
                            <Input placeholder="rachelacarvalho@gmail.com" />
                            <Label>CEP: </Label>
                            <div>
                                <InputA onChange={e => handleChangeCep(e)} value={cep} placeholder="21555-500" type="text" />
                                <BtnCep type="submit" onClick={e => handleCepSubmit(e)}>Pesquisar</BtnCep>
                            </div>
                            {showCep &&
                            (
                                <>
                                    <Label>Bairro: </Label>
                                    <Input value={cepData.bairro} />
                                    <Label>Cidade: </Label>
                                    <Input value={cepData.localidade} />
                                    <Label>Estado: </Label>
                                    <Input value={cepData.uf} />
                                </>
                        )
                    }
                   </FormDataContainer>
                   <BtnForm>ALTERAR</BtnForm>        
                    </Form>
                      
                </MainContainer>
            ) : null}
        </>
    );
};