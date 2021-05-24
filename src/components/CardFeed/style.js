import styled from 'styled-components'

export const MotherBox = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const ImagemItem = styled.img`
    height: 35px;
`

export const ImagemUser = styled.img`
    height: 35px;
`

export const ImagemLocal = styled.img`
    height: 35px;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    box-sizing: border-box;
    padding: 15px;
    margin: 30px 0;
    background-color: #fff;
    box-shadow: 0 0 7px 1px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;

    &:hover{
        box-shadow: 0 0 15px 1px;
    }
`

export const Title = styled.h3`
    margin: 0 0 15px 0;
`

export const CardItemContent = styled.div`
    text-align: start;
    bottom: 25px;
`

export const ContainerSubTitle = styled.div`
    width: 100%;
`

export const DonationType = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const Btn = styled.button`
    height: 35px;
    width: 150px;

    border: none;
    border-radius: 5px;

    background-color: #008000ba;

    cursor: pointer;

    bottom: 15px;

    &:active{
        outline: none;
        border: 1px solid black;
    }

    &:hover{
        background-color: #008000db;
    }
`

export const ContainerDescription = styled.div`
    text-align: justify;
`