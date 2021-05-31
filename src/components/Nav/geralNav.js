import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Login from '../../pages/login'
import { goTo, goToBack } from '../../routes/coordinator'
import {
    Header,
    ContainerNav,
    ContainerHeader
} from './style'



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
                        <button className='btn-nav logo' alt='logo do projeto' onClick={() => goTo(history, '/')}>
                            LOGO
                        </button>
                    </div>

                    <nav>
                        <ul className='nav-ul'>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/')} alt='botão que leva para página dos posts'>
                                    Posts
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/profile')} alt='botão que leva para página dos posts'>
                                    Profile
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/donation')} alt='botão que leva para página dos posts'>
                                    Cadastro Doação
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav btn-login' alt='botão com opções de conta do usuário' onClick={() => goTo(history, '/')/* toggleMiniMenu(!HideMenu) */}>
                                    Logout
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