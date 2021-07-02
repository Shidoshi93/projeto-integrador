import styled from 'styled-components'

export const ContainerHeader = styled.div`
    .btn-nav {
        border: none;
        background-color: transparent;
        padding: 12px 15px;
        text-decoration: none;
        color: black;
        cursor: pointer;
        transition: 0.7s;
        width: auto;
        font-size: 1.2em;
        font-weight: 700;

        &:hover {
            background-color: #f38d6885;
            border-radius: 5px;
            color: white;
        }

        @media (max-width: 560px) {
            font-size: 1.1em;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        list-style: none;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`

export const ContainerNav = styled.div`
    width: 85vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 560px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`

export const Header = styled.header`
    background-color: #FFF3DB;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;

    .logo {
        padding: 5px 15px; 
        background: none;
        border: none;
        transition: 1s;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }

        &:active {
            outline: none;
        }
    }

    .img-logo {
        height: 50px;
        @media (max-width: 560px) {
            height: 35px;
        }
    }

    .nav-ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
    }

    span {
        background-color: #FFF3DB;
        height: 150px;
        border-radius: 5px;
    }

    .hide-nav {
        height: 100%;
    }

    @media (max-width: 560px) {
        height: 20vh;
    }
`

export const HideSpan = styled.span`
    position: absolute;
    right: 0;
    top: 70px;
    width: 100vw;

    nav {
        width: 87.5vw;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
    }

    div {
        background-color: #fff3db9e;
        width: 100px;
        height: 100%;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
    }

    li {
        margin: 5px 0;
    }
`