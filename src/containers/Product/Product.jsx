import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Producr</h1>
      <Link id="link" to='/'>Home</Link>
      <Link  to='/carrito'>Carrito</Link>
      <Link id="link" to='/product'>product</Link>
      <Link id="link" to='/search'>search</Link>
    </div>
  );
};

export default Product;
