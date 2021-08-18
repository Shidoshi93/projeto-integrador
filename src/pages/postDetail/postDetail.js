import React from 'react'
import { useParams } from 'react-router'
import danielImg from '../../images/Daniel.png'
import rachelImg from '../../images/Rachel.png'
import marinaImg from '../../images/Marina.png'
import moniqueImg from '../../images/Monique.png'
import cestaBasica from '../../images/cestabasica.png'
import higiene from '../../images/higiene.png'
import vestuario from '../../images/vestuario.png'
import local from '../../images/local.png'
import {
    ContentCenter,
    MotherBox,
    ContainerHeader,
    ContainerImg,
    ContainerItemLocation,
    ContainerCtt,
    ContainerUserLocation,
    Img,
    CardItem,
    ImgItem,
    CardCtt,
    ImgCtt,
    ContainerQty,
    ContainerDescription,
    Description,
    AddressImg
} from './style'
import imgCtt from '../../images/contato.png'
import { useProtectedPage } from '../../hooks/useProtectedPage'

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
        description: "Preciso de duas cestas básicas. asdfasdfas asdfasdfasdf asdfa sdfasdf a asdfasdfasdfa asdfa sdf asdfasfdasdfasdf  asdfasdfasdfasdf asdfasfdasdf.",
        img: rachelImg,
        ctt: {
            tel: 99999999999,
            email: 'raquel@email.com',
        }
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: danielImg,
        ctt: {
            tel: 99999999999,
            email: 'daniel@email.com',
        }
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
        description: "Tenho aqui 3 casacos para doar.",
        img: moniqueImg,
        ctt: {
            tel: 99999999999,
            email: 'monique@email.com',
        }
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
        description: "Estou doando uma cesta básica.",
        img: marinaImg,
        ctt: {
            tel: 99999999999,
            email: 'marina@email.com',
        }
    }
];

function PostDetail() {
    const { id } = useParams()
    useProtectedPage()

    const post = donationPosts.filter(post => {
        return post.id === Number(id)
    })

    return (
        <ContentCenter>
            <MotherBox>
                <ContainerHeader>
                    <Img src={post[0].img} alt='foto do usuário' />
                    <h1>{post[0].userName} {post[0].userStatus === 'Doador' ? 'quer ajudar com' : 'precisa de ajuda com'}</h1>
                </ContainerHeader>

                <CardItem>
                    <ContainerImg>
                        {
                            post[0].item === 'Vestuário' ? <ImgItem src={vestuario} alt='imagem de roupas' /> :
                                post[0].item === 'Cesta Básica' ? <ImgItem src={cestaBasica} alt='imagem de uma cesta básica' /> :
                                    post[0].item === 'Kit higiene' ? <ImgItem src={higiene} alt='imagem de um kit de higiene' /> : ''
                        }
                    </ContainerImg>
                    <p className='title'><strong>{post[0].item}</strong></p>
                </CardItem>

                <CardItem>
                    <ContainerQty>
                        <Description><strong>Quantidade:</strong> {post[0].qty}</Description>
                    </ContainerQty>
                </CardItem>

                <CardItem>
                    <ContainerDescription>
                        <Description><strong>Descrição:</strong> {post[0].description}</Description>
                    </ContainerDescription>
                </CardItem>

                <CardItem>
                    <ContainerItemLocation>
                        <ContainerImg>
                            <AddressImg src={local} alt='ícone do local' />
                            <h3>Localidade: </h3>
                        </ContainerImg>
                        
                        <ContainerUserLocation>
                            <p>{post[0].city} / {post[0].state}</p>
                        </ContainerUserLocation>
                    </ContainerItemLocation>

                </CardItem>

                <CardCtt>
                    <ContainerImg>
                        <ImgCtt src={imgCtt}/>
                        <h3>Contatos:</h3>
                    </ContainerImg>
                    <div>
                        
                    </div>
                    <ContainerCtt>
                        <p><strong>Tel:</strong> {post[0].ctt.tel}</p>
                        <p><strong>e-mail:</strong> {post[0].ctt.email}</p>
                    </ContainerCtt>
                </CardCtt>
            </MotherBox>
        </ContentCenter>
    )
}
export default PostDetail;