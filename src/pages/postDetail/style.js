import styled from 'styled-components'

export const ContentCenter = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MotherBox = styled.div`
    width: 80%;
    min-height: 100%;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #FFF3DB;
    padding: 25px;
    border-radius: 10px;

    @media (max-width: 600px) {
        width: 95%;
    }
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;

    @media (max-width: 600px) {
        flex-direction: column;

        & h1 {
            font-size: 1.6rem;
            text-align: center;
        }
    }
    
`

export const Img = styled.img`
    border-radius: 50%;
    height: 150px;

    @media (max-width: 600px) {
        height: 100px;
    }
`

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .title{
        font-size: 1.7rem;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        .title {
            font-size: 1.3rem;
        }
    }
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const ImgItem = styled.img`
    height: 45px;
    filter: drop-shadow(3px 5px 2px black);
`

export const CardCtt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        align-items: center;
    }
`

export const ContainerCtt = styled.div`
    min-width: 250px;
    background-color: #f38d6875;
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;
`

export const ImgCtt = styled.img`
    height: 40px;
    filter: drop-shadow(3px 3px 2px black);
`

export const ContainerQty = styled.div`
    width: calc(80% - 60px);

    p {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        width: 100%;
        p {
            font-size: 1.1rem;
        }
    }
`

export const ContainerDescription = styled.div`
    padding: 0 30px;
    width: 80%;

    @media (max-width: 600px) {
        padding: 0;
        width: 100%;
    }
`

export const Description = styled.p`
    text-align: justify;
    line-height: 1.5;
    font-size: 1.2rem;

    @media (max-width: 600px) {
        text-align: justify;
        font-size: 1.1rem;
        
    }
`

export const ContainerItemLocation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerUserLocation = styled.div`
    min-width: 250px;
    background-color: #f38d6875;
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;
    text-align: center;
`

export const AddressImg = styled.img`
    height: 40px;
    filter: drop-shadow(3px 5px 2px black);
`