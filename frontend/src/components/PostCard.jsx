// Victor: tarjeta individual de post
import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <div className="post-card">
      {post.imagen_url && <img src={post.imagen_url} alt={post.titulo} />}
      <h2>{post.titulo}</h2>
      <p>Por {post.autor}</p>
      <Link to={`/post/${post.id}`}>Leer más</Link>
    </div>
  )
}

export default PostCard
