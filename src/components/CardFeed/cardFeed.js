import React from 'react';
import local from '../../images/local.png';
import userImg from '../../images/user.png';
import {
    CardContent,
    CardContainer,
    CardItemContent,
    Btn,
    MotherBox,
    TitleContainer,
    SearchContainer
} from './style'
import CardItem from './CardItem';

import cestabasica from '../../images/cestabasica.png'
import higiene from '../../images/higiene.png'
import vestuario from '../../images/vestuario.png'
import { useState } from 'react';
import { goTo } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const imgDonation = [
    { src: cestabasica },
    { src: higiene },
    { src: vestuario }
];

function Cards() {
    const [valueInputFilter, setValueInputFilter] = useState('')
    const history = useHistory()
    

    const donationPosts = [
        {   
            id: 1,
            item: "Cesta Básica",
            key: "Rachel123",
            qty: "2",
            userName: "Rachel",
            state: "RJ",
            city: "Rio de Janeiro",
            userStatus: "Beneficiário",
            description: "Preciso de duas cestas básicas. asdfasdfas asdfasdfasdf asdfa sdfasdf a asdfasdfasdfa asdfa sdf asdfasfdasdfasdf  asdfasdfasdfasdf asdfasfdasdf."
        },

        {
            id: 2,
            item: "Kit higiene",
            key: "Daniel123",
            qty: "1",
            userName: "Daniel",
            state: "BA",
            city: "Salvador",
            userStatus: "Doador",
            description: "Estou doando um kit higiene completo."
        },

        {
            id: 3,
            item: "Vestuário",
            key: "Monique123",
            qty: "3",
            userName: "Monique",
            state: "RJ",
            city: "Rio de Janeiro",
            userStatus: "Doador",
            description: "Tenho aqui 3 casacos para doar."
        },

        {
            id: 4,
            item: "Cesta Básica",
            key: "Marina123",
            qty: "1",
            userName: "Marina",
            state: "SP",
            city: "São Paulo",
            userStatus: "Doador",
            description: "Estou doando uma cesta básica."
        }
    ];

    const onChangeFilter = (e) => {
        setValueInputFilter(e.target.value)
    }

    let filteredPostsByType = donationPosts.filter((post) => {
        if (valueInputFilter.length === 0 || valueInputFilter === '0') {
            return donationPosts
        } else {
            return post.userStatus === valueInputFilter
        }
    })

    return (
        <MotherBox>
            {/* recebe informações do formulário de doação */}
            <SearchContainer>
                <select onChange={onChangeFilter} defaultValue='0'>
                    <option disabled value='0'>Selecione um tipo</option>
                    <option value='Doador'>Quero Receber</option>
                    <option value='Beneficiário'>Quero Ajudar</option>
                    <option value='0'>Ambos</option>
                </select>

                <select defaultValue='0'>
                    <option disabled value='0'>Selecione um tipo</option>
                    <option value='Vestuário'>Vestuário</option>
                    <option value='Kit higiene'>Kit Higiene</option>
                    <option value='Cesta Básica'>Alimentação</option>
                </select>
            </SearchContainer>

            <CardContainer className='cardContainer'>
                {filteredPostsByType.map((donation) => (
                    <CardContent 
                        className='cardContent' 
                        key={donation.key} 
                        onClick={() => goTo(history, `/detail/${donation.id}`)}
                        color={donation.userStatus === "Doador" ? "#F38D68" : "#F9DFAC"}
                    >
                        <TitleContainer color={donation.userStatus === "Doador" ? "#F38D68" : "#F9DFAC"}>
                            <h3>{donation.userStatus === "Doador" ? "Para doação" : "Preciso de ajuda"}</h3>
                        </TitleContainer>

                        <CardItemContent>
                            <CardItem
                                donationItem={donation.item}
                                imagem={imgDonation}
                            />

                            <CardItem
                                imgUser={userImg}
                                userStatus={donation.userStatus}
                                userName={donation.userName}
                            />

                            <CardItem
                                imgLocal={local}
                                alt={'Icone de localizador'}
                                city={donation.city}
                                state={donation.state}
                            />

                            {/* <ContainerDescription>
                                <p className='donationQty'> Quantidade: {donation.qty}</p>
                                <p>{donation.description}</p>
                            </ContainerDescription> */}
                        </CardItemContent>

                        {/* abre janela de contato com usuário */}
                        <Btn>
                            {donation.userStatus === "Doador" ? "ACEITAR" : "DOAR"}
                        </Btn>
                    </CardContent>
                ))}
            </CardContainer>
        </MotherBox>
    )
}

export default Cards;