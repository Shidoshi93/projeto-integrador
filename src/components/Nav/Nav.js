import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { goTo, goToBack } from '../../routes/coordinator'
import CardOptionAcount from './CardOptionsAcount'
import { Header } from './style'


function Nav() {
    const history = useHistory()
    const [HideMenu, setHideMenu] = useState(false)

    const click = (param) => {
        setHideMenu(param)
    }

    return (
        <div>
            <Header>
                <div>
                    <button className='logo' alt='logo do projeto' onClick={() => goToBack(history)}>
                        LOGO
                    </button>
                </div>

                <nav>
                    <ul className='nav-ul'>
                        <li>
                            <button onClick={() => goTo(history, '/feed')} alt='botão que leva para página dos posts'>
                                Posts
                            </button>
                        </li>
                        <li>
                            <button alt='botão com opções de conta do usuário' onClick={() => click(!HideMenu)}>
                                Conta
                            </button>
                        </li>
                    </ul>

                    {HideMenu && <CardOptionAcount />}
                </nav>
            </Header>
        </div>
    )
}
export default Nav;