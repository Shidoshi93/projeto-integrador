import styled from 'styled-components'

export const Header = styled.header`
    background-color: #bfbbbb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;

    div {
        margin-left: 50px;
    }

    ul {
        list-style: none;
        padding: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        margin: 0;
    }

    .logo {
        background-color: #bfbbbb !important; 
    }

    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            background-color: #fff;
            border-radius: 5px;
        }
    }

    .nav-ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 250px;

        li > a {
            padding: 5px 15px;
        }
        
    }

    span {
        position: absolute;
        right: 40px;
        top: 80px;
        z-index: 1000;
        background-color: #bfbbbb;
        width: 70px;
        height: 100px;
        border-radius: 5px;
    }

    nav {
        height: 100%;
    }

    .hide-nav{

    }

    .minha-conta{ 
        position: relative;
        display: inline-block;
    }

    .login{
        display: none;
        position: absolute;
        padding: 12px 16px;
        z-index: 1;
    }

    .minha-conta:hover .login {
        display: block;
    }
`

