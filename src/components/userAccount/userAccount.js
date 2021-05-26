import React from 'react';
import {
    MotherBox,
    ContainerHead,
    ContainerUserHead,
    ContainerImg,
    Title,
    ContainerBtnHead,
    BtnHead,
    ContainerBox,
    ContainerPBox,
    ContainerBtnBox,
    BtnBox
} from './styleUserAccount'

function UserAccount() {
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
            "img": "http://placekitten.com/100/100"
        }]

    return (
        <div>
            {userData.map((user) => (
                <MotherBox>
                    <ContainerHead>
                        <ContainerUserHead>
                            <ContainerImg src={user.img} alt={user.userFullName} />
                            <Title>{user.userFullName}</Title>
                        </ContainerUserHead>
                        <ContainerBtnHead>
                            <BtnHead>FAZER DOAÇÃO</BtnHead>
                            <BtnHead>PEDIR DOAÇÃO</BtnHead>
                        </ContainerBtnHead>
                    </ContainerHead>
                    <div>
                        <ContainerBox>
                            <ContainerPBox>
                                <p>Nome completo: </p>
                                <p>{user.userFullName}</p>
                            </ContainerPBox>
                            <ContainerPBox>
                                <p>CPF: </p>
                                <p>{user.cpf}</p>
                            </ContainerPBox>
                            <ContainerPBox>
                                <p>E-mail: </p>
                                <p>{user.email}</p>
                            </ContainerPBox>
                            <ContainerPBox>
                                <p>CEP: </p>
                                <p> {user.cep}</p>
                            </ContainerPBox>
                            <ContainerPBox>
                                <p>Cidade: </p>
                                <p> {user.localidade}</p>
                            </ContainerPBox>
                            <ContainerPBox>
                                <p>Estado: </p>
                                <p>{user.uf}</p>
                            </ContainerPBox>
                            <ContainerPBox>
                                <p>Bairro: </p>
                                <p>{user.bairro}</p>
                            </ContainerPBox>
                            <ContainerBtnBox>
                                <BtnBox>Alterar cadastro</BtnBox>
                                <BtnBox>Alterar senha</BtnBox>
                            </ContainerBtnBox>
                        </ContainerBox>

                    </div>
                </MotherBox>
            )
            )}

        </div>
    )
}
export default UserAccount;