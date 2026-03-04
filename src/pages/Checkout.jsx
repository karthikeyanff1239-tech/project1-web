import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {orderPlaced ? (
        <p style={{ color: "green" }}>
          Order placed successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}
