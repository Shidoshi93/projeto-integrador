import styled from 'styled-components';
import '../../fonts.css';
import backgroundImg from '../../images/fundo.png';

export const MotherBox = styled.div`
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-image: url(${backgroundImg});
    background-size: 130% 100%;
`
export const Form = styled.form`
    width: 100%;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    
`
export const FormDataContainer = styled.div`
    width: 45vw;
    border: 1px solid #F38D68;
    border-top-width: 15px;
    background-color: #F4F3F3;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: auto;   
    display:flex; 
    flex-wrap: wrap;
    padding: 0 .7% .5% .7%;
    margin: 0;
    box-sizing: border-box;

    @media(max-width: 920px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 420px) {
        width: 90%;
    }
`
export const Label = styled.label`
    width: 30%;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1rem;
    text-align: left;
    margin-top:1%;

    @media(max-width: 500px) {
        text-align: center;
    }
`
export const Input = styled.input`
    width: 70%;
    height: 2em;
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
    margin-top: .5%;
  `
export const InputA = styled(Input)`
    width: 50%;

    @media(max-width: 500px) {
        width: 70%;
    }
`

export const BtnCep = styled.button`
    width: 15%;
    height: 2em;
    margin-left: 5%;
    border: none;
    border-radius: 2em;
    background-color: #f38d68;
    margin-top: .5%;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:active{
        outline: none;
        border: 1px solid grey;
    }

    &:hover{
        background-color: #e08361;
    }

    @media(max-width: 500px) {
        width: 30%;
        margin: 0;
    }
`
export const FormBtnContainer = styled.div`
    width: 45vw;
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 15px;
    margin-bottom: 15px;

    @media(max-width: 920px) {
        width: 80%;
    }

    @media(max-width: 420px) {
        width: 90%;
    }
`