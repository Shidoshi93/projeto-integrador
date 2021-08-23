import React from 'react';
// import './home.css'
import womanImg from '../../images/woman.png'
import danielImg from '../../images/Daniel.png';
import marianaImg from '../../images/Mariana.png';
import marinaImg from '../../images/Marina.png';
import moniqueImg from '../../images/Monique.png';
import rachelImg from '../../images/Rachel.png';
import patriciaImg from '../../images/Patricia.png';
import { goTo } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import {
    Header,
    DivHeaderImg,
    HeaderImg,
    DivHeaderTitulo,
    HeaderTitulo,
    HeaderSubtitulo,
    SectionDoacoes,
    DivBotaoDoar,
    DivBotaoReceber,
    BotaoDoar,
    BotaoReceber,
    SectionSobre,
    DivSobre,
    SobreH2,
    DivTexto,
    SobreH3,
    ContainerImgs,
    DivImg
} from './homeStyle.js';


function TelaInicial(){

    const history = useHistory()
    const token = localStorage.getItem("token")

return(
    <div>
        <Header>
            <DivHeaderImg>    
                {/* <HeaderImg src={womanImg} alt="Mulher olhando para o lado"/> */}
            </DivHeaderImg>

            <DivHeaderTitulo>
                <HeaderTitulo> A Alcance une doadores de todo o país com pessoas que precisam. </HeaderTitulo>
                <HeaderSubtitulo>Deixando doações de alimentos não perecíveis, itens de higiêne e vestuário ao alcance das suas mãos.</HeaderSubtitulo>
            </DivHeaderTitulo>
        </Header>


        <SectionDoacoes>
            <DivBotaoDoar>
                <BotaoDoar onClick={token ? () => goTo(history, '/donation') : () => alert("Você deve fazer o login para acessar esta área.")}>Quero Doar</BotaoDoar>
            </DivBotaoDoar>
            <DivBotaoReceber>
                <BotaoReceber onClick={token ?  () => goTo(history, '/donation') : () => alert("Você deve fazer o login para acessar esta área.")}>Quero Receber</BotaoReceber>
            </DivBotaoReceber>
        </SectionDoacoes>

        <SectionSobre>
            <DivSobre>
                <SobreH2>Sobre o projeto</SobreH2>
                <DivTexto>
                    <p>A Alcance é uma plataforma que surgiu em 2021 como resultado do projeto integrador do curso de programação web oferecido pelo Programa Código Preto, uma ação entre as empresas Digital House e Quinto Andar para formação em tecnologia exclusiva para pessoas negras.</p>
                    <p>Seus desenvolvedores têm em comum a vontade de ajudar a reduzir os impactos socioeconômicos agravados pela pandemia do Covid-19 no Brasil.</p>
                </DivTexto>
            </DivSobre>
            
            <SobreH3>Quem faz a Alcance acontecer</SobreH3>
            
            <ContainerImgs>
                <DivImg>
                    <p>Daniel Ribeiro</p>
                    <img src={danielImg} alt="Daniel Ribeiro"/>
                </DivImg>
                <DivImg>
                    <p>Marina Silva</p>
                    <img src={marinaImg} alt="Marina Silva"/>
                </DivImg>
                <DivImg>
                    <p>Mariana Amina</p>
                    <img src={marianaImg} alt="Mariana Amina"/>
                </DivImg>
                <DivImg>
                    <p>Rachel Carvalho</p>
                    <img src={rachelImg} alt="Rachel Carvalho"/>
                </DivImg>
                <DivImg>
                    <p>Patricia de Castro</p>
                    <img src={patriciaImg} alt="Patricia de Castro"/>
                </DivImg>
                <DivImg>
                    <p>Monique Almeida</p>
                    <img src={moniqueImg} alt="Monique Almeida"/>
                </DivImg>
            </ContainerImgs>
        </SectionSobre>

    </div>

)


} export default TelaInicial;