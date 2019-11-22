import React from 'react'
import { getPostagens } from '../../service/posts'
import Header from '../../componentes/Header'
import Postagens from './Postagens'

class Blog extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        getPostagens()
        .then(response =>{
            this.setState({
                posts: response.data
            })
            console.log(response)
        })
        .catch(error=> {
            console.log(error)
        })
    }

    render(){
        return(
            <section className="blog-postagens">
                <Header className='blog-header'>
                    <h1>Blog</h1>
                </Header>
                
                <React.Fragment>
                {this.state.posts
                ? this.state.posts.map(post => {
                return <Postagens {... post} />
                }) : 
                <span>Carregando</span>
                }

                </React.Fragment>
            </section>
        )
    }
}
export default Blog