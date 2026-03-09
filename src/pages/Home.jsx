<<<<<<< HEAD
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import ditch from "../assets/ditch.jpg";
import cat from "../assets/cat.jpg";
import match from "../assets/match.jpg";

export default function Home() {
  return (
    <>
      <div className="home-page">
        <div className="home-hero">
          <h1>Welcome to Nikee</h1>
          <p>Discover premium shoes with amazing prices.</p>
          <Link to="/products">Shop Now</Link>

          {/* Carousel placed right after Shop Now */}
          <Carousel className="carousel">
            <Carousel.Item>
              <img src={ditch} alt="First slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>NEW ARRIVAL</h3>
                <p>Nike Victory Tour 4</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={cat} alt="Second slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>NEW ARRIVAL</h3>
                <p>The Nike Air Max Moto 2K Orange Horizon is a women's sneaker.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={match} alt="Third slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>NEW ARRIVAL</h3>
                <p>Nike V5 RNR men's shoe in white, black, and vast grey.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <Footer />
    </>
  );
}
=======
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
>>>>>>> 2700bd1d67ffd751b4f603515edd6f1593aa821b
