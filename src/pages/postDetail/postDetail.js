import React, { useEffect, useState } from 'react'
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
    AddressImg,
    Btn
} from './style'
import imgCtt from '../../images/contato.png'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios'
import userFotoDefault from '../../images/userphoto.png'
import { BASE_URL } from '../../constants/constants'
import { useHistory } from 'react-router-dom'

function PostDetail() {
    
    useEffect(() => {
        getPostById()
    }, [])

    const { id } = useParams()
    
    const token = localStorage.getItem('token')
    const [post, setPost] = useState()
    const history = useHistory()

    const getPostById = async () => {
        await axios.get(`${BASE_URL}/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <ContentCenter>
            <MotherBox>
                <ContainerHeader>
                    <Img src={post && post.user.user_img ? post.user.user_img : userFotoDefault} alt='foto do usuário' />
                    <h1>{post && post.user.user_name} {post && post.user_type === 'doador' ? 'quer ajudar com' : 'precisa de ajuda com'}</h1>
                </ContainerHeader>

                <CardItem>
                    <ContainerImg>
                        {
                            post && post.donation_type === 'vestuário' ? <ImgItem src={vestuario} alt='imagem de roupas' /> :
                                post && post.donation_type === 'cesta básica' ? <ImgItem src={cestaBasica} alt='imagem de uma cesta básica' /> :
                                    post && post.donation_type === 'kit higiene' ? <ImgItem src={higiene} alt='imagem de um kit de higiene' /> : ''
                        }
                    </ContainerImg>
                    <p className='title'><strong>{post && post.donation_type}</strong></p>
                </CardItem>

                <CardItem>
                    <ContainerQty>
                        <Description><strong>Quantidade:</strong> {post && post.qtd}</Description>
                    </ContainerQty>
                </CardItem>

                <CardItem>
                    <ContainerDescription>
                        <Description><strong>Descrição:</strong> {post && post.description}</Description>
                    </ContainerDescription>
                </CardItem>

                <CardItem>
                    <ContainerItemLocation>
                        <ContainerImg>
                            <AddressImg src={local} alt='ícone do local' />
                            <h3>Localidade: </h3>
                        </ContainerImg>

                        <ContainerUserLocation>
                            <p>{post && post.address.state} / {post && post.address.city}</p>
                        </ContainerUserLocation>
                    </ContainerItemLocation>

                </CardItem>

                <CardCtt>
                    <ContainerImg>
                        <ImgCtt src={imgCtt} />
                        <h3>Contatos:</h3>
                    </ContainerImg>
                    <div>

                    </div>
                    <ContainerCtt>
                        <p><strong>Tel:</strong> {post && post.user.cellphone}</p>
                        <p><strong>e-mail:</strong> {post && post.user.email}</p>
                    </ContainerCtt>
                </CardCtt>
            </MotherBox>
            <Btn onClick={() => history.goBack()}>Voltar</Btn>
        </ContentCenter>
    )
}
export default PostDetail;