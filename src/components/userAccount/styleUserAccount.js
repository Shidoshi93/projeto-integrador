import styled from 'styled-components';
import '../../../src/fonts.css';
import px2vw from '../../hooks/px2vw';
import backgroundImg from '../../images/fundo.png';

export const MotherBox = styled.div`
    height: 75vh;
    background-image: url(${backgroundImg});
    background-size: 130% 100%;
`
export const HeadContainer = styled.div`
    width: 100vw;
    margin: 2% auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const HeadUserContainer = styled.div`
    display: flex;   
    width: 30%;
`
export const ImgContainer = styled.img`
    width: 8rem;
    min-width: 100px;
    float: left;
    border: 1px solid #F38D68;
    border-radius: 30px;
    background: #F4F3F3;
`
export const Title = styled.h3`
    margin: 2% 0 1% 3%;
    float: left;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: clamp(12px, 2vw, 2.8rem);
    line-height: 16px;
    text-align: center;
    color: #F38D68; 
`
export const HeadBtnContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;      
`
export const BtnHead = styled.button`
    widht: 100%;
    min-width: 80px;
    height: 3.5em;
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
export const MainContainer = styled.div`
    width: 100vw;
    position: relative;
    margin: auto;
`
export const CardContainer = styled.div`
    width: 50vw;
    height: 35vh;    
    position: relative;
    margin: auto;
    border: 1px solid #F38D68;
    border-right-width: 15px;
    background-color: #F4F3F3;
    box-shadow: .7rem .7rem 0  rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`
export const Form = styled.form`
    
    
`
export const FormDataContainer = styled.div`
    width: ${px2vw(600)};
    position: absolute;
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    top: 0;
    left: ${px2vw(200)};
`
export const Label = styled.label`
    width: ${px2vw(200)};
    height: ${px2vw(18)};
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: ${px2vw(18)};
    line-height: ${px2vw(18)};
    text-align: left;
    float:left;
    margin-top:${px2vw(15)};
     
`
export const Input = styled.input`
    width: ${px2vw(300)};
    height: ${px2vw(18)};
    background-color: #F4F3F3;
    border: none;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(18)};
    float: left;
    margin-top:${px2vw(15)};
     
`
export const FormBtnContainer = styled.div`
    width: 80%;    
    margin: auto;
    margin-top: 2%;
    display: flex;
    justify-content: space-evenly;
 
`
export const BtnForm = styled.button`
    width: 11rem;
    height: 3.5em;
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

    &:active{
        outline: none;
        border: 1px solid black;
    }

    &:hover{
        background-color: #e66e42;
    }
`
