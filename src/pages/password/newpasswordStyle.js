import styled from 'styled-components';
import '../../fonts.css';
import backgroundImg from '../../images/fundo.png';

export const MotherBox = styled.div`
    height: 75vh;
    diplay: flex;
    justify-content: center;
    background-image: url(${backgroundImg});
    background-size: 130% 100%;
`
export const ContainerTitle = styled.div`
    width: 25%;
    height: 10%;
    position: relative;
    margin: 5% auto 1% auto;
    background: #F4F3F3;
    diplay: flex;
    justify-content: center;
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
    padding: 3% 0;
    width: 40vw;
    display:flex; 
    flex-direction: column;
    align-items: center; 
    border: 1px solid #F38D68;
    border-top-width: 15px;
    background-color: #F4F3F3;
    box-shadow: 15px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 2% auto;
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
    padding: 2%;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 4%;
   
  `
export const P = styled.p`
    text-align: center;
    margin-bottom: 3%;
    font-size: 1.5rem;
    
`