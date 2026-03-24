import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>{product.details}</p>
        <button
          onClick={() => {
            console.log(product);
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
