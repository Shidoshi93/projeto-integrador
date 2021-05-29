import styled from 'styled-components'

export const ContainerHeader = styled.div`
    .btn-nav {
        border: none;
        background-color: transparent;
        padding: 5px 15px;
        text-decoration: none;
        color: black;
        cursor: pointer;
        transition: 1s;
        width: 70px;

        &:hover {
            background-color: #F38D68;
            border-radius: 5px;
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
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.header`
    background-color: #FFF3DB;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;

    .logo {
        padding: 5px 15px; 
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