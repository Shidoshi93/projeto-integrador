import styled from 'styled-components';
import '../../../src/fonts.css';

export const MotherBox = styled.div`
    position: absolute;
    width: 100vw;
    height: 70vh;
`
export const ContainerHead = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
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
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
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
    font-size: 10px;
    line-height: 12px;
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
export const ContainerBox = styled.div`
    width: 60vw;
    height: 40vh;    
    display: inline-flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    // align-content: space-between;
    // // row-gap: 1px;
    
    border: 1px solid #F38D68;
    border-top-width: 10px;
    padding: 15px;
    // margin: auto;
    background-color: #F4F3F3;
    box-shadow: 15px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    `
export const ContainerPBox = styled.div`
    display: inline-flex;
    margin-left: 15px;
    // align-items: flex-end;
    // justify-content: space-between;
    // align-content: space-between;
`
export const ContainerBtnBox = styled.div`
    display: inline-flex;
    align-items: flex-end;
    justify-content: space-between;
    align-content: space-between;
`
export const BtnBox = styled.button`
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
// export const Label = styled.label`
//     width: 27px;
//     height: 12px;
//     // display: inline;
//     font-family: Lato;
//     font-style: normal;
//     font-weight: 300;
//     font-size: .8rem;
//     line-height: .8rem;
//     // margin: 1% 15% 1% 0;
// `
// export const Input = styled.input`
//     width: 244px;
//     height: 18px;
//     // display: inline;
//     background-color: #FFFFFF;
//     border: 1px solid #F38D68;
//     border-radius: 5px;
//     padding: 2%;
//     box-sizing: border-box;
//     // margin: 1% 0 1% 5%;

// `