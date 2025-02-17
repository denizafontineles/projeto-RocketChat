import React from 'react'

import './styles.css'

 function Header (props) {
     return (
         <section className={props.className}>
            <h1>{props.children}</h1>
         </section>
     )
 }
 
 export default Header