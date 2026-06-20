// Victor: navbar con links a Home y Categorías
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Blog de Tecnología</Link>
      <Link to="/categorias">Categorías</Link>
    </nav>
  )
}

export default Navbar
