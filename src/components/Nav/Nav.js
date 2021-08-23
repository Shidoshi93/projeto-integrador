import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { goTo } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import imgLogo from '../../images/logoAlcance.png'
import {
    BarItems,
    ContainerNav,
    ContainerNavBar,
    ImgLogo,
    Item,
    Logo
} from './style'


function NavNoCredentials(props) {

    const token = localStorage.getItem('token')
    useEffect(() => {

    }, [token])

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
        goTo(history, "/")
    }

    return (
        <ContainerNavBar bg="light" expand="lg">
            <Container>
                <Logo onClick={() => goTo(history, "/")}><ImgLogo src={imgLogo}/></Logo>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <BarItems id="basic-navbar-nav">
                    <ContainerNav className="me-auto">
                        <Item href="/feed">Doações</Item>
                        {token ? 
                            <>
                                <Item href="/profile">Perfil</Item>
                                <Item onClick={logout}>Sair</Item>
                            </> : 
                            <>
                                <Item href="/login">Login</Item>
                                <Item href="/signup">Cadastre-se</Item>
                            </>}
                        
                    </ContainerNav>
                </BarItems>
            </Container>
        </ContainerNavBar>
    )
}
export default NavNoCredentials;