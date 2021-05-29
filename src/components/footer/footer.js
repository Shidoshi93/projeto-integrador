import React from 'react'
import { 
    FooterContainer,
    ContainerIcons
 } from './style'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import message from '../../images/message.png'
import whatsapp from '../../images/whatsapp.png'

function Footer() {
    return (
        <FooterContainer>
            <div>
                <p>&copy; Todos os direitos reservados</p>
            </div>
            <ContainerIcons>
                <a href='https://www.facebook.com/' target='_blank'>
                    <img src={facebook} alt='botão do facebook'/>
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                    <img src={instagram} alt='botão do instagram'/>
                </a>
                <a href='https://www.whatsapp.com/' target='_blank'>
                    <img src={whatsapp} alt='botão do whatsApp'/>
                </a>
                <a href='https://www.gmail.com/' target='_blank'>
                    <img src={message} alt='botão do email'/>
                </a>
            </ContainerIcons>
        </FooterContainer>
    )
}
export default Footer;