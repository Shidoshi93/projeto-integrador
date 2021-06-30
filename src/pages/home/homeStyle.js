import styled from 'styled-components';
import '../../fonts.css';

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 810px) {
        flex-direction: column;
    }
`;

export const DivHeaderImg = styled.div`
    width: 50%;
    min-height: 100vh;
`;

export const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const DivHeaderTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFEDCB;
    padding: 50px 50px;

    @media (max-width: 810px) {
        width: 100%;
        min-height: 40vh;
    }
`;

export const HeaderTitulo = styled.h1`
    font-size: 3rem;
    color: #F38D68;
    font-weight: 900;
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 810px) {
        font-size: 2.5rem;
    }
`;

export const HeaderSubtitulo = styled.p`
    font-size: 1.7rem;
    text-align: center;

    @media (max-width: 810px) {
        font-size: 1.5rem;
    }
`;

export const SectionDoacoes = styled.section`
    display: flex;

    @media (max-width: 810px) {
        flex-direction: column;
    }
`;

const divBotao = styled.div`
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 810px) {
        width: 100%;
        min-height: 70vh;
    }
`;

export const DivBotaoDoar = styled(divBotao)`
    background-color: #F9DFAC;
`;

export const DivBotaoReceber = styled(divBotao)`
    background-color: #F38D68;
`;

const BotaoDoarReceber = styled.button` 
    position: relative;
    box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    min-width: 50%;
    min-height: 120px;
    border: none;
    font-size: 2.5rem;
    color: white;
    font-weight: 400;
    padding: 20px 20px;

    &:hover {
        cursor: pointer;
    }

    &:active {
        top: 5px;
        left: 5px;
        box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const BotaoDoar = styled(BotaoDoarReceber)`
    background-color: #F38D68;

    &:hover {
        background-color: #f5794c;
    }
`;

export const BotaoReceber = styled(BotaoDoarReceber)`
    background-color: #F9DFAC;
    color: #444444;

    &:hover {
        background-color: #ffd175;
    }
`;


export const SectionSobre = styled.section`
    min-height: 100vh;
`;

export const DivSobre = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;

    @media (max-width: 1085px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 810px) {
        padding: 50px 10px;
    }
`;

export const SobreH2 = styled.h2`
    background-color: #F38D68;
    border-radius: 25px;
    width: 25%;
    min-width: 200px;
    height: 200px;
    padding: 0px 20px;
    color: white;
    font-weight: bold;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1085px) {
        width: 40%;
        padding: 0px 50px;
        margin-bottom: 50px;
    }

    @media (max-width: 810px) {
        width: 70%;
        padding: 0px 50px;
        margin-bottom: 50px;
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`;

export const DivTexto = styled.div`
    background: #F4F3F3;
    border: 1px solid #F38D68;
    border-radius: 25px;
    width: 70%;
    padding: 10px 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    & p {
        font-size: 1rem;
        text-align: justify;
        text-align-last: center;
        text-indent: 20px;
        width: 40%;
    }

    @media (max-width: 1085px) {
        width: 100%;
    }

    @media (max-width: 810px) {
        width: 100%;
        padding: 40px 20px;
        flex-direction: column;

        & p {
            width: 100%;
            margin-bottom: 20px;
            font-size: 1.3rem;
        }

        & p:last-child {
            margin-bottom: 0;
        }
    }
`;

export const SobreH3 = styled.div`
    font-weight: bold;
    color: #F38D68;
    font-size: 2rem;
    text-align: center;
`;

export const ContainerImgs = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5% 0;
    justify-content: space-evenly;
`; 

export const DivImg = styled.div`
    width: 13%;
    min-width: 150px;
    margin-right: 15px;
    margin-bottom: 30px;
    box-shadow: 10px 10px 0px rgba(243, 141, 104, 0.5);
    border-radius: 15px;
    border: 1px solid rgba(243, 141, 104, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & img {
        width: 100%;
        border-radius: 15px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    & p {
        font-size: 1.2rem;
        padding: 10px 30px;
        text-align: center;
    }
`;