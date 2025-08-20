import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const mockProducts = [
  { id: 1, name: 'Laptop Futurista', category: 'electronics', price: 1500 },
  { id: 2, name: 'Auriculares Neon', category: 'electronics', price: 200 },
  { id: 3, name: 'Libro Cyberpunk', category: 'books', price: 35 },
  { id: 4, name: 'Enciclopedia Galáctica', category: 'books', price: 80 },
]

export default function ItemListContainer() {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        if (categoryId) {
          resolve(mockProducts.filter(p => p.category === categoryId))
        } else {
          resolve(mockProducts)
        }
      }, 500)
    }).then(data => setProducts(data))
  }, [categoryId])

  return (
    <div>
      <h2>Catálogo {categoryId ? `- ${categoryId}` : ''}</h2>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {products.map(prod => (
          <div key={prod.id} className="card">
            <h3>{prod.name}</h3>
            <p>Precio: ${prod.price}</p>
            <Link to={`/item/${prod.id}`}>
              <button className="button">Ver detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}