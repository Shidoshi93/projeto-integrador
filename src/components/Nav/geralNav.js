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



function GeralNav() {
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
                        <button className='logo' alt='logo do projeto' onClick={() => goTo(history, '/')}>
                            <img className='img-logo' src={Logo} alt='imagem do logo'/>
                        </button>
                    </div>

                    <nav>
                        <ul className='nav-ul'>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/feed')} alt='botão que leva para página dos posts'>
                                    Postagens
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/profile')} alt='botão que leva para página dos posts'>
                                    Perfil
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/donation')} alt='botão que leva para página dos posts'>
                                    Cadastro Doação
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav btn-login' alt='botão com opções de conta do usuário' onClick={() => goTo(history, '/')/* toggleMiniMenu(!HideMenu) */}>
                                    Sair
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
export default GeralNav;