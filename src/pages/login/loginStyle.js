import styled from 'styled-components';
import '../../fonts.css'; 
import backgroundImg from '../../images/fundo.png';

export const MotherBox = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-image: url(${backgroundImg});
    background-size: 130% 100%;

    @media (max-width: 990px) {
        padding-top: 150px;
        min-height: 90vh;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 0px;
` 
export const FormDataContainer = styled.div`
    width: 25vw;
    border: 1px solid #F38D68;
    border-top-width: 15px;
    background-color: #F4F3F3;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: auto;   
    display:flex; 
    flex-wrap: wrap;
    padding: .7%;
    box-sizing: border-box;

    @media(max-width: 990px) {
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 420px) {
        width: 90%;
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
    margin-top: 2%;
`
export const Label = styled.label`
    width: 30%;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1rem;
    text-align: left;
    margin-top: 2%;

    @media(max-width: 500px) {
        text-align: center;
    }
`
export const FormBtnContainer = styled.div`
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 30px;
    margin-bottom: 40px;

    @media(max-width: 990px) {
        width: 80%;
    }

    @media(max-width: 420px) {
        width: 90%;
    }
`
export const HeadContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 15px;
    
    @media(max-width: 990px) {
        width: 80%;
        margin: 0 auto;
    }

    @media(max-width: 420px) {
        width: 90%;
    }
`
export const BtnHead = styled.button`
    width: 160px;
    min-width: 80px;
    height: 2.2em;
    background-color: #F38D68;
    border: none;
    border-radius: .7rem;
    box-shadow: .3rem .3rem 0 rgba(243, 141, 104, 0.5);
    font-family: Lato;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:active{
        outline: none;
        border: 1px solid lightgrey;
    }

    &:hover{
        background-color: #e66e42;
    }
`