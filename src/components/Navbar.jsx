
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav>
      <div className="logo">Nikee</div>

      <div className="demo">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

