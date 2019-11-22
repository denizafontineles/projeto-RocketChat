import React from 'react'

import './styles.css'

function Postagens (props){
    return(
        <div className="postagem">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <button type='button' className="botao">Saiba Mais</button>
        </div>
    )
}

export default Postagens