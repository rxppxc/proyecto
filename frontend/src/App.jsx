import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PostDetalle from './pages/PostDetalle'
import Categorias from './pages/Categorias'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/post/:id"   element={<PostDetalle />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
