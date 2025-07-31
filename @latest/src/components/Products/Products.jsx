
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
export default function Products() {
  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products`);
      console.log(data);
      setProductArray(data);
   
    } catch (error) {
      console.error("Something went wrong", error);
    
    }
  }

  useEffect(() => {
     setIsLoading(false);
    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container ">
          <div className="row">
            {productArray.length > 0 ? (
              productArray.map((product) => (
                <Item product={product} key={product.id} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}


function Item({ product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="item border rounded p-4 shadow-sm h-100 text-center d-flex flex-column justify-content-between">
        <img
          src={product.image}
          className="w-100 mb-2"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <h6>{product.title}</h6>
        <p className="text-success fw-bold">${product.price}</p>

        <Link to={`/products/${product.id}`} className="btn btn-outline-dark mt-3">
          View Details
        </Link>
      </div>
    </div>
  );
}
