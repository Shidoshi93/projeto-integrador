import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const Logo = styled(Navbar.Brand)`
    transition: 0.7s;

    &:hover {
        transform: scale(1.1);
    }
`

export const BarItems = styled(Navbar.Collapse)`
    display: flex;
    flex-grow: 0!important;
`

export const ContainerNav = styled(Nav)`
    gap: 5px!important;
`

export const ContainerNavBar = styled(Navbar)`
    background-color: #f38d68!important;
    min-height: 10vh!important;

    @media (max-width: 990px) {
        position: fixed;
        width: 100%;
        z-index: 999;
    }
`

export const ImgLogo = styled.img`
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
`

export const Item = styled(Nav.Link)`
    font-weight: 700;
    font-size: 1.2rem;
    color: #2e3031!important;
    transition: 1s;

    &:hover{
        color: #fff3db!important;
    }
`
