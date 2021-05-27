import styled from 'styled-components';
import '../../../src/fonts.css';

export const MotherBox = styled.div`
    display:flex;
    width: 100vw;
    height: 50vh;
    margin: auto;
    margin-top: 100px;
    align-items: center;
    flex-direction: column;
`
export const ContainerHead = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    width: 55vw;
    height: 20vh;
`
export const ContainerUserHead = styled.div`
    display: inline-flex;
    align-items: center;
`
export const ContainerImg = styled.img`
    display: inline;
    width: 100px;
    height: 100px;
    border: 1px solid #F38D68;
    border-radius: 15px;
    background: #F4F3F3;
    border-radius: 15px;
`
export const Title = styled.h3`
    display: inline;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 29px;
    text-align: center;
    margin-left: 40px;
    color: #F38D68;    
`
export const ContainerBtnHead = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: flex-end;
    justify-content: space-between;
    align-content: space-between;
`
export const BtnHead = styled.button`
    width: 150px;
    height: 38px;
    background-color: #F38D68;
    border: none;
    border-radius: 15px;
    box-shadow: 5px 5px 0px rgba(243, 141, 104, 0.5);
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: .8rem;
    line-height: .8rem;
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
export const ContainerForm = styled.form`
    width: 35vw;
    height: 30vh;    
    border: 1px solid #F38D68;
    border-right-width: 15px;
    background-color: #F4F3F3;
    box-shadow: 15px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px 0px 10px 0px;   
`
export const ContainerBox = styled.div`
    width: 90%; 
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: flex-start; 
    align-items: left;
    margin-rigth: 100px; 
    padding: 5px 0px 0px 120px;
`
export const Label = styled.label`
    width: 200px;
    height: 12px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1rem;
    text-align: left;
    float:left;
    margin-top:10px;
     
`
export const Input = styled.input`
    width: 204px;
    height: 18px;
    background-color: #F4F3F3;
    border: none;
    box-sizing: border-box;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    clear: both;
    float:left;
    margin-top:10px;
     
`
export const ContainerBtnForm = styled.div`
    display: inline-flex;
    align-items: flex-end;
    justify-content: space-around;
    align-content: space-between;
    padding: 0px 60px 0px 30px;
`
export const BtnForm = styled.button`
    width: 110px;
    height: 30px;
    margin: 0;
    border: none;
    border-radius: 5px;
    background-color: #F38D68;
    align-items: center;
    display: inline-block;
    align-content: center;
    justify-content: center;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: .8rem;
    line-height: .8rem;
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
