import styled from 'styled-components';
import '../../src/fonts.css';

export const MotherBox = styled.div`
    position: absolute;
    right: 15px;
    top: 70px;
    width: 237px;
    height: fit-content;
    background: #F38D68;
    border-radius: 10px;
    z-index: 700000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;
    a {

    }
` 

export const Input = styled.input`
    width: 184px;
    height: 25px;
    top: 40px;
    right: 2px;
    background: #FFFFFF;
    border-radius: 5px;
    border-style: none;
    padding: 5px;
`

export const Button = styled.button`
    width: 140px;
    height: 30px;
    top: 110px;
    right: 50px;
    border-style: none;
    background: #FFF3DB;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #f9ad91a8;
    }
`

export const Title = styled.h3`
    color: white;
    width: 140px;
    height: 30px;
    top: 15px;
    right: 50px;
    font-family: Roboto Slab;
`

export const Ancora = styled.a`
    color: black;
    top:145px;
    font-size:15px;
    font-family: Roboto Slab;
    cursor: pointer;
    padding: 5px;
`