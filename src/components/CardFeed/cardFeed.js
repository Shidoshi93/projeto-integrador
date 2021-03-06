import React, { useEffect } from 'react';
import local from '../../images/local.png';
import userImg from '../../images/user.png';
import {
    CardContent,
    CardContainer,
    CardItemContent,
    Btn,
    MotherBox,
    TitleContainer,
    SearchContainer,
    ContainerBtnPage
} from './style'
import CardItem from './CardItem';

import cestabasica from '../../images/cestabasica.png'
import higiene from '../../images/higiene.png'
import vestuario from '../../images/vestuario.png'
import { useState } from 'react';
import { goTo } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';

const imgDonation = [
    { src: cestabasica },
    { src: higiene },
    { src: vestuario }
];

function Cards() {
    const [valueInputFilter, setValueInputFilter] = useState('')
    const [posts, setPosts] = useState([])
    const [toggle, setToggle] = useState(false)
    const history = useHistory()

    const token = localStorage.getItem("token");

    useEffect(() => {
        getPosts()
    }, [])

    let numPage = 0
    const pageSize = 12

    const handleNumPage = () => {
        numPage = numPage + 1
        getPosts()
    }

    const handleNumPageBack = () => {
        numPage = numPage - 1
        getPosts()
    }

    const getPosts = () => {
        axios.get(`${BASE_URL}/post/listAll/page?page=${numPage}&size=${pageSize}`)
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => {
                console.log('erro: ', err)
            })
    }

    const onChangeFilter = (e, value) => {
        setValueInputFilter(e.target.value)
        setToggle(true)
    }
    const onChangeFil = (e, value) => {
        setValueInputFilter(e.target.value)
        setToggle(false)
    }

    let filteredPostsByType = posts.filter((post) => {
        if (valueInputFilter.length === 0 || valueInputFilter === '0') {

            return posts.sort(function(a, b){
                return new Date(b.created_at) - new Date(a.created_at)
            })

        } else if (toggle === true) {
            return post.user_type === valueInputFilter
        } else {
            return post.donation_type === valueInputFilter
        }
    })

    return (
        <MotherBox>
            {/* recebe informa????es do formul??rio de doa????o */}
            <SearchContainer>
                <select onChange={onChangeFilter} defaultValue='0' className='select'>
                    <option disabled value='0'>Tipo de doa????o</option>
                    <option value='doador'>Quero Receber</option>
                    <option value='benefici??rio'>Quero Ajudar</option>
                    <option value='0'>Ambos</option>
                </select>

                <select onChange={onChangeFil} defaultValue='0' className='select'>
                    <option disabled value='0'>Tipo de item</option>
                    <option value='vestu??rio'>Vestu??rio</option>
                    <option value='kit higiene'>Kit Higiene</option>
                    <option value='cesta b??sica'>Alimenta????o</option>
                </select>
            </SearchContainer>

            <CardContainer className='cardContainer'>
                {filteredPostsByType.map((donation) => (
                    <CardContent
                        className='cardContent'
                        key={String(Date.now()) + String(Math.random())}
                        onClick={ token ? () => goTo(history, `/detail/${donation.id}`) :  () => alert('Voc?? n??o tem autoriza????o para ver os detalhes do post. Deve se logar primeiro.')}
                        color={donation.user_type === "doador" ? "#F38D68" : "#F9DFAC"}
                    >
                        <TitleContainer color={donation.user_type === "doador" ? "#F38D68" : "#F9DFAC"}>
                            <h3>{donation.user_type === "doador" ? "Para doa????o" : "Preciso de ajuda"}</h3>
                        </TitleContainer>

                        <CardItemContent>
                            <CardItem
                                donationItem={donation.donation_type}
                                imagem={imgDonation}
                            />

                            <CardItem
                                imgUser={userImg}
                                userStatus={donation.user_type}
                                userName={donation.user.user_name}
                            />

                            <CardItem
                                imgLocal={local}
                                alt={'Icone de localizador'}
                                city={donation.address.city}
                                state={donation.address.state}
                            />
                        </CardItemContent>

                        {/* abre janela de contato com usu??rio */}
                        <Btn>
                            {donation.user_type === "doador" ? "ACEITAR" : "DOAR"}
                        </Btn>
                    </CardContent>
                ))}
            </CardContainer>
            <ContainerBtnPage>
                <Btn onClick={handleNumPage}>Pr??xima p??gina</Btn>
                <Btn onClick={handleNumPageBack}>P??gina anterior</Btn>
            </ContainerBtnPage>
        </MotherBox>
    )
}

export default Cards;