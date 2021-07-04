import styled from 'styled-components';
import '../../../src/fonts.css';
import px2vw from '../../hooks/px2vw';
import backgroundImg from '../../images/fundo.png';

export const MotherBox = styled.div`
    min-height: 75vh;
    background-image: url(${backgroundImg});
    background-size: 130% 100%;
`
export const HeadContainer = styled.div`
    /* width: 100vw; */
    margin: 2% auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
`
export const HeadUserContainer = styled.div`
    display: flex;
    flex-wrap: wrap;   
    width: 30%;
    min-width: 200px;

    @media(max-width: 420px){
        flex-direction: column;
        align-items: center;
    }
`
export const ImgContainer = styled.img`
    width: 8rem;
    border: 1px solid #F38D68;
    border-radius: 30px;
    background: #F4F3F3;
    margin-right: 20px;

    @media(max-width: 420px) {
        margin: 0;
    }
`
export const Title = styled.h3`
    margin: 2% 0 1% 0;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    color: #F38D68; 

    @media(max-width: 420px) {
        text-align: center;
        margin-bottom: 30px;
    }
`
export const HeadBtnContainer = styled.div`
    width: 15%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;      
`
export const BtnHead = styled.button`
    width: 100%;
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
    /* width: 100vw; */
    position: relative;
    margin: auto;
`
export const CardContainer = styled.div`
    width: 50vw;    
    position: relative;
    margin: auto;
    margin-bottom: 30px;
    border: 1px solid #F38D68;
    border-right-width: 15px;
    background-color: #F4F3F3;
    box-shadow: .7rem .7rem 0  rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding-bottom: 15px;

    @media(max-width: 920px) {
        width: 80vw;
    }

    @media(max-width: 420px) {
        width: 90vw;
    }
`
export const Form = styled.form`
    
    
`
export const FormDataContainer = styled.div`
    width: ${px2vw(600)};
    display:flex;  
    flex-wrap: wrap;
    margin-left: -13vw;

    @media (max-width: 920px){
        flex-direction: column;
        margin-left: 15px;
    }

`
export const Label = styled.label`
    width: ${px2vw(200)};
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 18px;
    text-align: left;
    float:left;
    margin-top:${px2vw(15)};
     
`
export const Input = styled.input`
    width: ${px2vw(300)};
    min-width: 220px;
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 18px;
    float: left;
    margin-top:${px2vw(15)};
     
`
export const FormBtnContainer = styled.div`
    width: 80%;    
    margin: auto;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
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
    margin-bottom: 30px;

    &:active{
        outline: none;
        border: 1px solid black;
    }

    &:hover{
        background-color: #e66e42;
    }
`
