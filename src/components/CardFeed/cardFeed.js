
import local from '../../images/local.png';
import userImg from '../../images/user.png';
import {
    ImagemUser,
    ImagemLocal,
    CardContent,
    CardContainer,
    CardItemContent,
    Btn,
    ContainerDescription,
    MotherBox,
    Title
} from './style'
import CardItem from './CardItem';

import cestabasica from '../../images/cestabasica.png'
import higiene from '../../images/higiene.png'
import vestuario from '../../images/vestuario.png'

const imgDonation = [
    { src: cestabasica },
    { src: higiene },
    { src: vestuario }
];

function Cards() {

    const donationPosts = [
        {
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

    return (
        <MotherBox>
            {/* recebe informações do formulário de doação */}
            <CardContainer className='cardContainer'>
                {donationPosts.map((donation) => (
                    <CardContent className='cardContent'>
                        <Title>{donation.userStatus === "Doador" ? "Para doação" : "Preciso de ajuda"}</Title>
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

                            <ContainerDescription>
                                <p className='donationQty'> Quantidade: {donation.qty}</p>
                                <p>{donation.description}</p>
                            </ContainerDescription>
                        </CardItemContent>

                        {/* abre janela de contato com usuário */}
                        <Btn>
                            {donation.userStatus === "Doador" ? "Quero receber" : "Quero doar"}
                        </Btn>
                    </CardContent>
                ))}
            </CardContainer>
        </MotherBox>
    )
}

export default Cards;