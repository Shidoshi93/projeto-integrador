import styled from 'styled-components';
import '../../../src/fonts.css';

export const MainContainer = styled.div`
    /* width: 100vw; */
    position: relative;
    margin: auto;
`
export const Form = styled.form`
    width: 40%;
    margin: auto;
    border: 1px solid #F38D68;
    border-right-width: 15px;
    background-color: #F4F3F3;
    box-shadow: .7rem .7rem 0  rgba(0, 0, 0, 0.2);
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FormDataContainer = styled.div`
    // width: 100%;
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: center;
    top: 0;    
`
export const Label = styled.label`
    width: 20%;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1rem;
    text-align: left;
    margin-top:1%;
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
`
export const BtnForm = styled.button`
    width: 11rem;
    height: 2em;
    border: none;
    border-radius: .7rem;
    background-color: #F38D68;
    font-family: Lato;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    margin: 1%;

    &:active{
        outline: none;
        border: 1px solid black;
    }

    &:hover{
        background-color: #e66e42;
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
`
export const CloseModalButton = styled(BtnCep)`
    right: 25%;
    position: absolute;
    width: 32px;
    z-index: 10;
`