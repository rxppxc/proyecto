import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json' },
})

export const getPosts      = ()   => api.get('/posts')
export const getPost       = (id) => api.get(`/posts/${id}`)
export const getCategorias = ()   => api.get('/categorias')

export default api
