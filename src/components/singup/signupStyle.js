import styled from 'styled-components';
import '../../../src/fonts.css';
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const MotherBox = styled.div`
    height: 80vh;
    diplay: flex;
`
export const ContainerTitle = styled.div`
    width: 20%;
    height: 10%;
    position: relative;
    margin: 2% auto 1% auto;
    background: #F4F3F3;
`
export const Title = styled.h1`
    width: 100%;
    position: relative;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: ${px2vw(30)};
    line-height: ${px2vw(40)};
    text-align: center;
    padding-top: 2%;
    color: #F38D68;
`
export const ContainerForm = styled.form`
    width: ${px2vw(580)};
    height: ${px2vw(330)};    
    position: relative;
    display:flex; 
    flex-direction: column; 
    flex-wrap: wrap;
    border: ${px2vw(1)} solid #F38D68;
    border-top-width: ${px2vw(15)};
    background-color: #F4F3F3;
    box-shadow: ${px2vw(15)} ${px2vw(10)} ${px2vw(0)} rgba(0, 0, 0, 0.2);
    border-radius: ${px2vw(5)};
    margin: 0 auto;
`    
export const FormDataContainer = styled.div`
    width: ${px2vw(600)};
    height: ${px2vw(350)};
    position: relative;
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    padding-left: 2.5%;
    border: none;
`
export const Label = styled.label`
    width: ${px2vw(150)};
    height: ${px2vw(16)};
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(16)};
    text-align: left;
    float:left;
    margin-top:${px2vw(5)};
`
export const Input = styled.input`
    width: ${px2vw(400)};
    height: ${px2vw(16)};
    background-color: #FFFFFF;
    border: ${px2vw(1)} solid #F38D68;
    border-radius: ${px2vw(10)};
    padding: 2%;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(16)};
    margin-top:${px2vw(5)};
  `
export const InputA = styled.input`
    width: ${px2vw(300)};
    height: ${px2vw(16)};
    background-color: #FFFFFF;
    border: ${px2vw(1)} solid #F38D68;
    border-radius: ${px2vw(10)};
    padding: 2%;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(16)};
    margin-top:${px2vw(5)};
`
export const BtnCep = styled.button`
    width: ${px2vw(80)};
    height: ${px2vw(27)};
    margin-left: ${px2vw(20)};
    border: none;
    border-radius: ${px2vw(15)};
    background-color: #f38d68;
    margin-top:${px2vw(5)};
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(10)};
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:active{
        outline: none;
        border: ${px2vw(1)} solid grey;
    }

    &:hover{
        background-color: #e08361;
    }
`
export const FormBtnContainer = styled.div`
    width: ${px2vw(650)};    
    position: relative;
    top: 10%;
    display: inline-flex;
    justify-content: space-evenly;
`
export const BtnSend = styled.button`
    width: ${px2vw(140)};
    height: ${px2vw(40)};
    border: none;
    border-radius: ${px2vw(30)};
    background-color: #2BB67E;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(16)};
    text-align: center;

    color: #FFFFFF;

    cursor: pointer;

    &:active{
        outline: none;
        border: ${px2vw(1)} solid black;
    }

    &:hover{
        background-color: #008000db;
    }
`
export const BtnClear = styled.button`
    width: ${px2vw(140)};
    height: ${px2vw(40)};
    border: none;
    border-radius: ${px2vw(30)};
    background-color: #F08080;
    align-items: center;
    display: inline-block;
    align-content: center;
    justify-content: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(16)};
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:active{
        outline: none;
        border: ${px2vw(1)} solid black;
    }

    &:hover{
        background-color: #e08361;
    }
`