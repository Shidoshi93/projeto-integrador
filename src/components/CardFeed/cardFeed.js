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
    SearchContainer
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
    const pageSize = 10

    const handleNumPage = () => {
        numPage += 1
        getPosts()
    }

    const handleNumPageBack = () => {
        numPage -= 1
        getPosts()
    }

    const getPosts = () => {
        axios.get(`${BASE_URL}/post/listAll/page?page=${numPage}&size${pageSize}`)
            .then((res) => {
                setPosts(res.data)
                console.log(res.data)
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

            const newPosts = {
                donationType: post.donation_type,
                description: post.description,
                id: post.post_id,
                userType: post.user_type,
                qtd: post.qtd,
                status: post.status
            }
            return newPosts
        } else if (toggle === true) {
            return post.user_type === valueInputFilter
        } else {
            return post.donation_type === valueInputFilter
        }
    })

    return (
        <MotherBox>
            {/* recebe informações do formulário de doação */}
            <SearchContainer>
                <select onChange={onChangeFilter} defaultValue='0' className='select'>
                    <option disabled value='0'>Tipo de doação</option>
                    <option value='Doador'>Quero Receber</option>
                    <option value='Beneficiário'>Quero Ajudar</option>
                    <option value='0'>Ambos</option>
                </select>

                <select onChange={onChangeFil} defaultValue='0' className='select'>
                    <option disabled value='0'>Tipo de item</option>
                    <option value='Vestuário'>Vestuário</option>
                    <option value='Kit higiene'>Kit Higiene</option>
                    <option value='Cesta Básica'>Alimentação</option>
                </select>
            </SearchContainer>

            <CardContainer className='cardContainer'>
                {filteredPostsByType.map((donation) => (
                    <CardContent
                        className='cardContent'
                        key={`${donation.post_id + donation.user.user_name}`}
                        onClick={() => goTo(history, `/detail/${donation.id}`)}
                        color={donation.user_type === "doador" ? "#F38D68" : "#F9DFAC"}
                    >
                        <TitleContainer color={donation.user_type === "doador" ? "#F38D68" : "#F9DFAC"}>
                            <h3>{donation.user_type === "doador" ? "Para doação" : "Preciso de ajuda"}</h3>
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

                        {/* abre janela de contato com usuário */}
                        <Btn>
                            {donation.userStatus === "Doador" ? "ACEITAR" : "DOAR"}
                        </Btn>
                    </CardContent>
                ))}
            </CardContainer>
            <button onClick={handleNumPage}>Próxima página</button>
            <button onClick={handleNumPageBack}>Página anterior</button>
        </MotherBox>
    )
}

export default Cards;