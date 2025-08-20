// src/components/ItemDetailContainer.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const mockProducts = [
  { id: 1, name: "Laptop Futurista", category: "electronics", price: 1500, description: "Una laptop con diseño futurista y potente." },
  { id: 2, name: "Auriculares Neon", category: "electronics", price: 200, description: "Auriculares con luces neón." },
  { id: 3, name: "Libro Cyberpunk", category: "books", price: 35, description: "Un libro ambientado en un mundo cyberpunk." },
  { id: 4, name: "Enciclopedia Galáctica", category: "books", price: 80, description: "Enciclopedia de conocimientos universales." },
];

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts.find((p) => p.id === parseInt(id)));
      }, 500);
    }).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button className="button" onClick={() => addToCart(product, 1)}>
        Agregar al carrito
      </button>
    </div>
  );
}
