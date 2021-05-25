import styled from 'styled-components';
import '../../../src/fonts.css';

export const MotherBox = styled.div`
    position: absolute;
    width: 729px;
    height: 415px;
`
export const ContainerTitle = styled.div`
    width: 234px;
    height: 62px;
    margin: 30px auto 30px auto;
    background: #F4F3F3;
    
`
export const Title = styled.h1`
    position: absolute;
    width: 152px;
    height: 31px;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin: 10px auto 10px auto;
    // padding: 10px auto 10px auto;
    color: #F38D68;
    
    
`
export const ContainerForm = styled.form`
    // display: inline;
    // justify-content: center;
    // align-items: flex-start;
    // align-content: space-between;
    // row-gap: 1px;
    width: 400px;
    height: 250px;
    border: 1px solid #F38D68;
    border-top-width: 10px;
    padding: 15px;
    margin: auto;
    text-align: left;
    background-color: #F4F3F3;
    box-shadow: 15px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
`
export const Label = styled.label`
    width: 27px;
    height: 12px;
    // display: inline;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: .8rem;
    line-height: .8rem;
    // margin: 1% 15% 1% 0;
`
export const Input = styled.input`
    width: 244px;
    height: 18px;
    // display: inline;
    background-color: #FFFFFF;
    border: 1px solid #F38D68;
    border-radius: 5px;
    padding: 2%;
    box-sizing: border-box;
    // margin: 1% 0 1% 5%;

`
export const Btn = styled.button`
    width: 110px;
    height: 30px;
    // margin: 0;
    border: none;
    border-radius: 15px;
    background-color: #2BB67E;
    // align-items: center;
    // display: inline-block;
    // align-content: center;
    // justify-content: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
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
export const BtnClear = styled.button`
    width: 110px;
    height: 30px;
    margin: 0;
    border: none;
    border-radius: 15px;
    background-color: #F08080;
    align-items: center;
    display: inline-block;
    align-content: center;
    justify-content: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
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