import { Link } from 'react-router-dom';
import image from '../../assets/best-selling-online-products-in-nigeria.jpg'
function Home() {
  return (
    <>
      <div className="home text-center d-flex flex-column justify-content-center align-items-center p-5">
        <h1 className=" text-info-emphasis ">Welcome to HabiShop 🛍️</h1>

        <p className="lead mb-4 w-75 mx-auto">
          Your one-stop shop for everything you need — fashion, electronics, jewelry, and more.
          Discover amazing deals, trusted brands, and fast delivery. All in one place!
        </p>

        <Link to="/products" className="btn btn-outline-dark btn-lg px-5">
          Explore Products
        </Link>
    <img src={image} alt="Product Banner" className="img-fluid mt-5 rounded shadow w-50" />
    
      </div>

      
    </>
  );
}

export default Home;








