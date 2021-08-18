import styled from 'styled-components'

export const MotherBox = styled.div`
    width: 80%;
    margin-inline: auto;
    padding-top: 150px;

    @media (max-width: 990px) {
        min-height: 90vh;
    }
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
    margin-top: 30px;
`

export const SearchContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    select {
        font-size: 1.1em;
        border-radius: 5px;
        font-weight: 400;
        border: 1px solid #F38D68;
        cursor: pointer;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 250px;
    box-sizing: border-box;
    padding: 15px;
    margin: 30px 0;
    background-color: #fff;
    box-shadow: 10px 10px 5px 5px #d1ccca;
    border-radius: 10px;
    border: 1px solid ${(props) => props.color};
    cursor: pointer;
    transition: 0.25s;

    &:hover{
        box-shadow: 0 0 15px 1px #F38D68;
    }
`

export const TitleContainer = styled.div`
    background: ${(props) => props.color};
    width: 250px;
    height: 50px;
    display: flex;
    margin-top: -15px;
    z-index: 11;
    border-radius: 10px 10px 0 0;
    align-items: center;
    justify-content: center;

    h3 {
        font-weight: 600;
    }
`

export const CardItemContent = styled.div`
    text-align: start;
    bottom: 25px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerSubTitle = styled.div`
    width: 100%;
`

export const DonationType = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    p {
        font-weight: 500;
    }
`


export const Btn = styled.button`
    height: 35px;
    width: 150px;
    border: none;
    border-radius: 5px;
    background-color: #ffc1aa;
    cursor: pointer;
    bottom: 15px;
    font-weight: 800;

    &:active{
        outline: none;
        border: 1px solid black;
    }

    &:hover{
        background-color: #F38D68;
    }
`

export const ContainerDescription = styled.div`
    text-align: justify;
`