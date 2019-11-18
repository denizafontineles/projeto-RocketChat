import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            aberto: false
        }
    }
    handleAbreOuFecha = e =>{
    this.setState(prevState => {
        return {aberto: !prevState.aberto}
        })
    }

    render () {
          let classesOpcoes = 'navbar-menu__opcoes'
          let classesBotao = 'navbar-menu__botao'

          if(this.state.aberto){
              classesOpcoes += 'navbar=menu__opcoes--aberto'
              classesBotao += 'navbar-menu__botao--aberto'
          }
          return (
              <div className='nav-menu navbar-links'>
                  <span className={classesBotao} onClick={this.handleAbreOuFecha}>
                      Menu
                  </span>
                  <ul className = {classesOpcoes}>
                      <li>
                      <Link to='/' className='navbar-links__ativo'>Home</Link>
                      </li>
                      <li><Link to='/contato' className='navbar-links__ativo'> Contato</Link></li>
                      <li><Link to='/chat' className='navbar-links__ativo'>Chat</Link></li>
                  </ul>
              </div>
          )
    }
}

export default Menu