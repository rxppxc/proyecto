// Victor: página principal con listado de posts
import { useEffect, useState } from 'react'
import { getPosts } from '../services/api'
import PostCard from '../components/PostCard'

function Home() {
  const [posts, setPosts] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    getPosts()
      .then(res => setPosts(res.data))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p>Cargando posts...</p>

  return (
    <div>
      <h1>Últimos posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home
