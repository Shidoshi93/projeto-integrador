import styled from 'styled-components';
import '../../fonts.css';
import backgroundImg from '../../images/fundo.png';

export const MotherBox = styled.div`
    height: 75vh;
    display: flex;
    justify-content: center;
    background-image: url(${backgroundImg});
    background-size: 130% 100%;
`
export const Container = styled.div`
    margin: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`
export const Title = styled.h1`
    width: 100%;
    position: relative;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    padding: 2%;
    color: #F38D68;
`
export const FormDataContainer = styled.div`
    text-align: center;
    padding: 20px;
    width: 45vw;
    display:flex; 
    flex-direction: column;
    align-items: center; 
    border: 1px solid #F38D68;
    border-top-width: 15px;
    background-color: #F4F3F3;
    box-shadow: 15px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 2% auto;
    height: min-content;

    @media(max-width: 920px) {
        width: 80%;
    }
`
export const Label = styled.label`
    font-family: Lato;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 2%;
`

export const Input = styled.input`
    width: 65%;
    height: 1rem;
    background-color: #FFFFFF;
    border: 1px solid #F38D68;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 4%;

    @media (max-width: 420px) {
        width: 80%;
        margin-bottom: 15px;
    }
   
  `
export const P = styled.p`
    text-align: center;
   margin-bottom: 3%;
    font-size: 1.5rem;
    
`