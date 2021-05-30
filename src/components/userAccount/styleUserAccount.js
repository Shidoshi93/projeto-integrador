import styled from 'styled-components';
import '../../../src/fonts.css';
import px2vw from '../../hooks/px2vw';

export const MotherBox = styled.div`
    height: ${px2vw(800)};
`
export const HeadContainer = styled.div`
    width: 70%;
    height: 20%;
    position: relative;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 0%;    
`
export const HeadUserContainer = styled.div`
    position: relative;
    margin: 0;
    margin-top: 1%;
    margin-bottom: 2%; 
    float: center;
`
export const ImgContainer = styled.img`
    width: ${px2vw(120)};
    height: ${px2vw(120)};
    position: relative;
    margin: ${px2vw(5)} ${px2vw(0)} ${px2vw(5)} ${px2vw(0)};
    float: left;
    border: ${px2vw(1)} solid #F38D68;
    border-radius: ${px2vw(30)};
    background: #F4F3F3;
`
export const Title = styled.h3`
    position: relative;
    margin: ${px2vw(10)} ${px2vw(0)} ${px2vw(5)} ${px2vw(20)};
    float: left;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: ${px2vw(24)};
    line-height: ${px2vw(24)};
    text-align: center;
    color: #F38D68; 
`
export const HeadBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: space-between;
    align-items: flex-end;
    row-gap: ${px2vw(30)};    
`
export const BtnHead = styled.button`
    width: ${px2vw(150)};
    height: ${px2vw(38)};
    background-color: #F38D68;
    border: none;
    border-radius: ${px2vw(15)};
    box-shadow: ${px2vw(5)} ${px2vw(5)} ${px2vw(0)} rgba(243, 141, 104, 0.5);
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: ${px2vw(14)};
    line-height: ${px2vw(14)};
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:active{
        outline: none;
        border: ${px2vw(1)} solid lightgrey;
    }

    &:hover{
        background-color: #e66e42;
    }
`
export const MainContainer = styled.div`
    width: 100%;
    height: ${px2vw(200)};    
    position: relative;
    margin: ${px2vw(20)} auto ${px2vw(5)} auto;
`
export const CardContainer = styled.div`
    width: ${px2vw(700)};
    height: ${px2vw(300)};    
    position: relative;
    margin: ${px2vw(0)} auto ${px2vw(5)} auto;
    border: ${px2vw(1)} solid #F38D68;
    border-right-width: ${px2vw(15)};
    background-color: #F4F3F3;
    box-shadow: ${px2vw(15)} ${px2vw(10)} ${px2vw(0)} rgba(0, 0, 0, 0.2);
    border-radius: ${px2vw(5)};
`
export const FormContainer = styled.form`
    width: ${px2vw(700)};
    height: ${px2vw(300)};    
    position: absolute;
    top: ${px2vw(18)};
    
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
    font-size: ${px2vw(18)};
    line-height: ${px2vw(18)};
    clear: both;
    float: left;
    margin-top:${px2vw(15)};
     
`
export const FormBtnContainer = styled.div`
    width: 100%;    
    position: absolute;
    top: ${px2vw(340)};
    left: ${px2vw(350)};
    right: 0;
    display: inline-flex;
    justify-content: space-evenly;
`
export const BtnForm = styled.button`
    width: ${px2vw(130)};
    height: ${px2vw(32)};
    margin: 0;
    border: none;
    border-radius: ${px2vw(5)};
    background-color: #F38D68;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: ${px2vw(14)};
    line-height: ${px2vw(14)};
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:active{
        outline: none;
        border: 1px solid black;
    }

    &:hover{
        background-color: #F08080;
    }
`
