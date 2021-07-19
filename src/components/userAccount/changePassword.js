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
} from './styleChangePassword'

export const ChangePassword = ({ showChangePassword, setShowChangePassword }) => {
    const [valuePassword, setValuePassword] = useState('');

    const onChangePassword = (event) => {

        setValuePassword(event.target.value)
        console.log(valuePassword)
    };

    const changePasswordRef = useRef();

    const closeChangePassword = e => {
        if (changePasswordRef.current === e.target) {
            setShowChangePassword(prev => !prev);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showChangePassword) {
                setShowChangePassword(false);
                console.log('I pressed');
            }
        },
        [setShowChangePassword, showChangePassword]
    );

    function handleChangePass (event) {
        window.confirm("Tem certeza que você deseja alterar sua senha?");
    };

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

      
    return (
        <>
            {showChangePassword ? (
                <MainContainer >
                    <CloseModalButton onClick={closeChangePassword} ref={changePasswordRef}>
                            X
                    </CloseModalButton>
                    <Form showChangePassword={showChangePassword}>
                        <FormDataContainer>

                            <Label>Nova senha: </Label>
                            <Input 
                            type='password' 
                            required="required" 
                            onChange={onChangePassword}
                            value={valuePassword}
                            placeholder="Digite sua nova senha" />

                            <Label>Confirme a nova senha: </Label>
                            <Input 
                            type='password' 
                            required="required" 
                            onChange={onChangePassword}
                            value={valuePassword}
                            placeholder="Digite novamente a sua nova senha" />

                        </FormDataContainer>
                        <BtnForm onClick={e => handleChangePass(e)}>ALTERAR</BtnForm>        
                    </Form>
                      
                </MainContainer>
            ) : null}
        </>
    );
};