import axios from 'axios'

const PostagensURL = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
}

const criaPostagens = axios.create(PostagensURL)

export function getPostagens () {
  const endpoint = '/posts'
  return criaPostagens.get(endpoint)
}