import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Login from '../../pages/login'
import { goTo, goToBack } from '../../routes/coordinator'
import {
    Header,
    ContainerNav,
    ContainerHeader
} from './style'
import Logo from '../../images/logoAlcance.png'



function Nav() {
    const history = useHistory()
    const [HideMenu, setHideMenu] = useState(false)

    const toggleMiniMenu = (param) => {
        setHideMenu(param)
    }

    return (
        <ContainerHeader>
            <Header className='flex'>
                <ContainerNav className='flex'>
                    <div>
                        <button className='logo' alt='logo do projeto' onClick={() => goTo(history, '/', toggleMiniMenu)}>
                            <img className='img-logo' src={Logo} alt='imagem do logo'/>
                        </button>
                    </div>

                    <nav>
                        <ul className='nav-ul'>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/feed', toggleMiniMenu)} alt='botão que leva para página dos posts'>
                                    Postagens
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav' alt='botão com opções de conta do usuário' onClick={() => toggleMiniMenu(!HideMenu)}>
                                    Entrar
                                </button>
                            </li>
                        </ul>
                    </nav>
                    
                </ContainerNav>
                
            </Header>
            {HideMenu && <Login
                toggleMiniMenu ={toggleMiniMenu}
            />}
        </ContainerHeader>
    )
}
export default Nav;