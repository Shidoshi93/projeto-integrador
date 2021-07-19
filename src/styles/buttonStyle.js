import styled from 'styled-components';
import '../fonts.css';

export const BtnSend = styled.button`
    width: 180px;
    min-width: 120px;
    height: 3em;
    border: none;
    border-radius: 2em;
    background-color: #2BB67E;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 1.08rem;
    line-height: 1.08rem;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    &:active{
        outline: none;
        border: 1px solid black;
    }
    &:hover{
        background-color: #008000db;
    }
`
export const BtnClear = styled(BtnSend)`
    background-color: #F08080;
   
    &:hover{
        background-color: #e08361;
    }
`