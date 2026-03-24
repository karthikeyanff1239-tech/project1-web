import { Link } from "react-router-dom";


export default function ProductList({ products }) {

  return (
    <div className="products-container">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-card-body">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <Link to={`/products/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 }