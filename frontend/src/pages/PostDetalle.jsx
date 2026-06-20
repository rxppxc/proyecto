// Anthony: página de detalle de un post
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../services/api'

function PostDetalle() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    getPost(id).then(res => setPost(res.data))
  }, [id])

  if (!post) return <p>Cargando...</p>

  return (
    <div>
      <h1>{post.titulo}</h1>
      <p>Por {post.autor} — {new Date(post.fecha_creacion).toLocaleDateString()}</p>
      {post.imagen_url && <img src={post.imagen_url} alt={post.titulo} />}
      <p>{post.contenido}</p>
    </div>
  )
}

export default PostDetalle
