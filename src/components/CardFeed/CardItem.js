import React from 'react';
import {
    ContainerSubTitle,
    DonationType,
    ImagemItem,
    ImagemLocal
} from './style'


function CardItem(props) {
    return (
        <ContainerSubTitle>
            <DonationType>
                {props.donationItem === "cesta básica" ? <ImagemItem className="imageItem" src={props.imagem[0].src} alt={props.donationItem} /> : props.imgUser ?
                    <ImagemItem className="imageItem" src={props.imgUser} alt='imagem do usuário' /> : props.imgLocal ? <ImagemLocal src={props.imgLocal} alt={props.alt} /> : ''}
                {props.donationItem === "vestuário" ?
                    <ImagemItem className="imageItem" src={props.imagem[2].src} alt={props.donationItem} /> : ""}
                {props.donationItem === "kit higiene" ?
                    <ImagemItem className="imageItem" src={props.imagem[1].src} alt={props.donationItem} /> : ""}
                <p className='donationItem'>{props.donationItem ? props.donationItem : props.userStatus ?
                    `${props.userStatus}:` : ''} {props.userName ? props.userName : props.city ? `${props.city} / ${props.state}` : ''}
                </p>
            </DonationType>
        </ContainerSubTitle>

    )
}
export default CardItem;