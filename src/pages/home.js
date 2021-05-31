import React from 'react';
import '../home.css'
import womanImg from '../images/woman.png'
import danielImg from '../images/Daniel.png';
import marianaImg from '../images/Mariana.png';
import marinaImg from '../images/Marina.png';
import moniqueImg from '../images/Monique.png';
import rachelImg from '../images/Rachel.png';
import patriciaImg from '../images/Patricia.png';
import { goTo } from '../routes/coordinator';
import { useHistory } from 'react-router';
// Página inicial

function TelaInicial(){

    const history = useHistory()

return(
    <div>
        <div className="header">
            <div className="div_header-img">    
                <img src={womanImg}/>
            </div>

            <div className="header_titulo">
                <h1> Aqui reunimos doadores de todo o país com pessoas que precisam </h1>
                <p>O portal conecta doações de alimentos não perecíveis, itens de higiênee Vestuário</p>
            </div>
        </div>


        <div className="div_botoes">
            <div className="div_botao-doar">
                <button onClick={() => goTo(history, '/donation')}>Quero Doar</button>
            </div>
            <div className="div_botao-receber">
                <button onClick={() => goTo(history, '/donation')}>Quero Receber</button>
            </div>
        </div>

        <div className="sobre">
            <div className="div_sobre">
                <h2>Sobre o projeto</h2>
                <div className="div_texto">
                    <p>A PLATAFORMA é uma aplicação web que surgiu em 2021 como resultado do projeto integrador do curso de programação web oferecido pelo Programa Código Preto, uma ação entre as empresas Digital House e Quinto Andar para formação em tecnologia exclusiva para pessoas negras.</p>
                    <p>Seus desenvolvedores têm em comum a vontade de ajudar a reduzir os impactos socioeconômicos agravados pela pandemia do Covid-19 no Brasil.</p>
                </div>
            </div>
            
            <h3>Quem Faz o Projeto Acontecer</h3>
            
            <div className="container_imgs">
                <div className="div_img">
                    <p>Daniel Ribeiro</p>
                    <img src={danielImg}/>
                </div>
                <div className="div_img">
                    <p>Marina Silva</p>
                    <img src={marinaImg}/>
                </div>
                <div className="div_img">
                    <p>Mariana Amina</p>
                    <img src={marianaImg}/>
                </div>
                <div className="div_img">
                    <p>Rachel Carvalho</p>
                    <img src={rachelImg}/>
                </div>
                <div className="div_img">
                    <p>Patricia de Castro</p>
                    <img src={patriciaImg}/>
                </div>
                <div className="div_img">
                    <p>Monique Almeida</p>
                    <img src={moniqueImg}/>
                </div>
            </div>
        </div>

    </div>

)


} export default TelaInicial;