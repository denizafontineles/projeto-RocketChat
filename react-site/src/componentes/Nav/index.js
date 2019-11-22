import React from 'react'

import Logo from '../../images/RocketChat.png'
import Menu from './Menu'

import './styles.css'

function Nav () {
    return(
        <nav className='navbar'>
            <img 
            src={Logo} 
            alt='Logotipo do Rocketchat'
            className='navbar-logo'></img>  
        <Menu />

        </nav>
    )

}
export default Nav
