import styled from 'styled-components';
import '../fonts.css';
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const MotherBox = styled.div`
    height: 80vh;
    diplay: flex;
    justify-content: center;
`
export const ContainerTitle = styled.div`
    width: 20%;
    height: 10%;
    position: relative;
    margin: 2% auto 1% auto;
    background: #F4F3F3;
    diplay: flex;
    justify-content: center;
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
    text-align: center;
    padding: 70px 0;

`
export const Label = styled.label`
    font-family: Lato;
    font-weight: 300;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(25)};
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
    margin-top:${px2vw(30)};
  `

  export const FormBtnContainer = styled.div`
    width: ${px2vw(400)};    
    position: relative;
    top: 20%;
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
export const P = styled.p`
    text-align: center;
    width: ${px2vw(580)};
    
`