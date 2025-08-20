import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext)

  if (cart.length === 0) return <h2>El carrito está vacío</h2>

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button className="button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total final: ${total}</h3>
      <button className="button" onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}