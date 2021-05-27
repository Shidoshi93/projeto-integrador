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
                        <button onClick={() => goTo(history, '/login')} alt='botão que leva para página dos posts'>
                            Login
                        </button>
                    </li>
                    <li>
                        <button onClick={() => goTo(history, '/signup')} alt='botão com opções de conta'>
                            Signup
                        </button>
                    </li>
                    <li>
                        <button onClick={() => goTo(history, '/profile')} alt='botão com opções de conta'>
                            Profile
                        </button>
                    </li>
                    <li>
                        <button href='#' alt='botão com opções de conta'>
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </span>
    )
}
export default CardOptionAcount;