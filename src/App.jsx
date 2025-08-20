// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartWidget from "./components/CartWidget";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/category/electronics" className="nav-link">Electrónica</Link>
        <Link to="/category/books" className="nav-link">Libros</Link>
        <CartWidget />
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2 className="not-found">404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}
