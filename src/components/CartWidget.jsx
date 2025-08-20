// src/components/CartWidget.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
}