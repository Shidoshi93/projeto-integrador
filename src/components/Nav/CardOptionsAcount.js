import React from 'react'
import { useHistory } from 'react-router';
import { goTo } from '../../routes/coordinator';
import { HideSpan } from './style'

function CardOptionAcount(props) {
    const history = useHistory()
    return (
        <HideSpan className='hide-span'>
            <nav className='hide-nav'>
                <div>
                    <ul className='hide-ul'>
                        <li>
                            <button 
                                className='btn-nav' 
                                onClick={() => goTo(history, '/login', props.toggleMiniMenu)}  
                                alt='botão que leva para página dos posts'
                            >
                                Login
                            </button>
                        </li>
                        <li>
                            <button 
                                className='btn-nav' 
                                onClick={() => goTo(history, '/signup', props.toggleMiniMenu)} 
                                alt='botão com opções de conta'
                            >
                                Signup
                            </button>
                        </li>
                        <li>
                            <button 
                                className='btn-nav' 
                                onClick={() => goTo(history, '/donation', props.toggleMiniMenu)} 
                                alt='botão com opções de conta'
                            >
                                Postar
                            </button>
                        </li>
                        <li>
                            <button 
                                className='btn-nav' 
                                onClick={() => goTo(history, '/profile', props.toggleMiniMenu)} 
                                alt='botão com opções de conta'
                            >
                                Profile
                            </button>
                        </li>
                        <li>
                            <button 
                                className='btn-nav'  
                                alt='botão com opções de conta'>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </HideSpan>
    )
}
export default CardOptionAcount;