// Anthony: página de categorías
import { useEffect, useState } from 'react'
import { getCategorias } from '../services/api'

function Categorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    getCategorias().then(res => setCategorias(res.data))
  }, [])

  return (
    <div>
      <h1>Categorías</h1>
      {categorias.map(cat => (
        <div key={cat.id}>
          <h2>{cat.nombre}</h2>
          <p>{cat.descripcion}</p>
        </div>
      ))}
    </div>
  )
}

export default Categorias
