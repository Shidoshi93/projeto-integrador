import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { goTo, goToBack } from '../../routes/coordinator'
import CardOptionAcount from './CardOptionsAcount'
import {
    Header,
    ContainerNav,
    ContainerHeader
} from './style'



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
                        <button className='btn-nav logo' alt='logo do projeto' onClick={() => goToBack(history, toggleMiniMenu)}>
                            LOGO
                        </button>
                    </div>

                    <nav>
                        <ul className='nav-ul'>
                            <li>
                                <button className='btn-nav' onClick={() => goTo(history, '/feed', toggleMiniMenu)} alt='botão que leva para página dos posts'>
                                    Posts
                                </button>
                            </li>
                            <li>
                                <button className='btn-nav' alt='botão com opções de conta do usuário' onClick={() => toggleMiniMenu(!HideMenu)}>
                                    Conta
                                </button>
                            </li>
                        </ul>
                    </nav>
                    
                </ContainerNav>
                
            </Header>
            {HideMenu && <CardOptionAcount
                toggleMiniMenu ={toggleMiniMenu}
            />}
        </ContainerHeader>
    )
}
export default Nav;