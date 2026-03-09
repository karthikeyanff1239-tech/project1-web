<<<<<<< HEAD
import { Link } from "react-router-dom";


export default function ProductList({ products }) {
  // const products = [
  //   { id: 1, name: "Dunk Sb Low", price: 5000, image: "src/assets/sheo.jpg" },
  //   { id: 2, name: "Nike Field General Suede", price: 7000, image: "src/assets/shoe2.jpg" },
  //   { id: 3, name: "Salomon S/LAB Series", price: 3000, image: "src/assets/sheo3.jpg" },
  //   { id: 4, name: "Nike Court Vision Lo", price: 3000, image: "src/assets/sheo4.jpg" },
  //   { id: 5, name: "Nike M2K Tekno", price: 3000, image: "src/assets/sheo5.jpg" },
  //   { id: 6, name: "ke Joyride Run Flyknit", price: 3000, image: "src/assets/sheo6.jpg" },
  // ];

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
=======
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = [
    { id: 1, name: "Dunk Sb Low", price: 5000, image: "src/assets/sheo.jpg" },
    { id: 2, name: "Nike Field General Suede", price: 7000, image: "src/assets/shoe2.jpg" },
    { id: 3, name: "Salomon S/LAB Series", price: 3000, image: "src/assets/sheo3.jpg" },
    { id: 4, name: "Nike Court Vision Lo", price: 3000, image: "src/assets/sheo4.jpg" },
    { id: 5, name: "Nike M2K Tekno", price: 3000, image: "src/assets/sheo5.jpg" },
    { id: 6, name: "ke Joyride Run Flyknit", price: 3000, image: "src/assets/sheo6.jpg" },
  ];

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
>>>>>>> 2700bd1d67ffd751b4f603515edd6f1593aa821b
