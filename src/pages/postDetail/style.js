import styled from 'styled-components'

export const MotherBox = styled.div`
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #FFF3DB;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 10px;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;

    @media (max-width: 600px) {
        flex-direction: column;

        & h1 {
            font-size: 1.5rem;
            text-align: center;
        }
    }
    
`

export const Img = styled.img`
    border-radius: 15px;
    height: 150px;
`

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const ImgItem = styled.img`
    height: 60px;
`

export const CardCtt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 600px) {
        align-items: center;
    }
`

export const Description = styled.p`
    text-align: justify;

    @media (max-width: 600px) {
        text-align: center;
    }
`

export const AddressImg = styled.img`
    height: 40px;
`