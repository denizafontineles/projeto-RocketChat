import React from 'react'
import { getMensagens } from '../../service/base'
import Mensagem from './componentes/Mensagem'

import './styles.css'

class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            mensagens: ''
        }
    }

    componentDidMount(){
        getMensagens()
        .then(response =>{
            this.setState({
                mensagens: response.data
            })
        })
        .catch(error =>{
            console.error(error)
        }
        )
    }

    render() {
         return(
            <section className='chat'>
            <h2>Mensagens</h2>
            {this.state.mensagens.length > 0
            ? this.state.mensagens.map(item => {
                return <Mensagem mensagem={item} key={item.id} />
            })
            : <span>Carregando mensagens</span>
        }
            </section>
        )
    }
}

export default Chat