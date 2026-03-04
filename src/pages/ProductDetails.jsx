import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import sheo from "../assets/sheo.jpg";
import sheo4 from "../assets/sheo4.jpg";
export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: "1",
      name: "Dunk Sb Low",
      price: 5000,
      details: "This is a premium Dunk Sb Low",
      image: sheo,
    },
    {
      id: "2",
      name: "Nike Field General Suede",
      price: 7000,
      details: "Comfortable and stylish sneakers",
      image: "https://via.placeholder.com/400",
    },
    {
      id: "3",
      name: "Salomon S/LAB Series",
      price: 3000,
      details: "Durable backpack for daily use",
      image: "https://via.placeholder.com/400",
    },
    {
      id: "4",
      name: "Nike Court Vision Lo",
      price: 3000,
      details: "Classic design with modern comfort",
      image: "src/assets/sheo4.jpg",
    },
    {
      id: "5",
      name: "Nike M2K Tekno",
      price: 3000,
      details: "Chunky sneakers with a retro vibe",
      image: "src/assets/sheo5.jpg",
    },
    {
      id: "6",
      name: "ke Joyride Run Flyknit",
      price: 3000,
      details: "Innovative running shoes with cushioning",
      image: "src/assets/sheo6.jpg",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>{product.details}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
