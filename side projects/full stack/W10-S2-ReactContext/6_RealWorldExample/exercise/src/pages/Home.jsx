import { products } from '../data';
import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../contexts/BasketContext';

function Home() {

    // TODO: what does this function do?
  const { addToBasket } = useBasket();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: £{product.price}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
            <button onClick={() => addToBasket(product)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
