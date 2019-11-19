import React from 'react'
import Grupo from './Grupo'

class Formulario extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            nome:{
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            pais: {
                valor: '',
                erro: ''
            },
            mensagem: {
                valor: '',
                erro: ''
            }
        }
    }

    handleChange = (nomeCampo, valorCampo, erroCampo = '') => {
        console.log(nomeCampo, valorCampo, erroCampo)
        this.setState({
            [nomeCampo] : {
                valor: valorCampo,
                erro : erroCampo
            }  
        })
    }

    render() {
        return (
            <div className='pagina'>
                <h2>Entre em contato conosco!</h2>
                <form className='formulario'>
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor='nome'> Nome Completo: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='nome'
                            placeholder='Digite seu nome'
                            mudaEstado={this.handleChange}
                            minLength={10}
                            required
                            type='text'
                            />

                            <Grupo.Legenda htmlFor='email'> Email: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='email'
                            placeholder='Digite seu email'
                            mudaEstado={this.handleChange}
                            required
                            type='email'
                            />
                            <Grupo.Legenda htmlFor='pais'> País: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='pais'
                            placeholder='Digite seu país'
                            mudaEstado={this.handleChange}
                            required
                            type='text'
                            />
                            <Grupo.Legenda htmlFor='mensagem'> Mensagem:</Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='mensagem'
                            placeholder='Digite sua mensagem'
                            mudaEstado={this.handleChange}
                            type='text'
                            />

                    </Grupo>
                </form>
            </div>
        )
    }
}

export default Formulario

{/* <CaixaTexto
name='nome'
placeholder='Digite seu nome'
mudaEstado={this.handleChange}
/>

<CaixaTexto
name='email'
placeholder='Digite seu email'
mudaEstado={this.handleChange}
/>

<CaixaTexto
name='pais'
placeholder='Digite seu país'
mudaEstado={this.handleChange}
/>

<CaixaTexto
name='mensagem'
placeholder='Digite sua mensagem'
mudaEstado={this.handleChange}
/> */}