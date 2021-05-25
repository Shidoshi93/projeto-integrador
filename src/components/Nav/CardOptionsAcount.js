import React from 'react'
import { useHistory } from 'react-router';
import { goTo } from '../../routes/coordinator';

function CardOptionAcount(props) {
    const history = useHistory()
    return (
        <span>
            <nav className='hide-nav'>
                <ul className='hide-ul'>
                    <li>
                        <a onClick={() => goTo(history, '/login')} alt='botão que leva para página dos posts'>
                            Login
                        </a>
                    </li>
                    <li>
                        <a onClick={() => goTo(history, '/signup')} alt='botão com opções de conta'>
                            Signup
                        </a>
                    </li>
                    <li>
                        <a href='#' alt='botão com opções de conta'>
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </span>
    )
}
export default CardOptionAcount;