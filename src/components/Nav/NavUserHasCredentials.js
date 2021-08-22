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


function NavUserHasCredentials(props) {

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        goTo(history, "/")
    }

    return (
        <ContainerNavBar bg="light" expand="lg">
            <Container>
                <Logo onClick={() => goTo(history, "/")}><ImgLogo src={imgLogo}/></Logo>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <BarItems id="basic-navbar-nav">
                    <ContainerNav className="me-auto">
                        {props.feed === true ? <></> : <Item href="/feed">Postagens</Item>}
                        {props.profile === true ? <></> : <Item href="/profile">Perfil</Item>}
                        {props.donation === true ? <></> : <Item href="/donation">Cadastro de Doações</Item>}
                        <Item onClick={logout}>Sair</Item>
                    </ContainerNav>
                </BarItems>
            </Container>
        </ContainerNavBar>
    )
}
export default NavUserHasCredentials;