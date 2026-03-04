import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Welcome to Shop</h1>
        <p>Discover premium products with amazing prices.</p>
        <Link to="/products">Shop Now</Link>
      </div>
    </div>
  );
}
