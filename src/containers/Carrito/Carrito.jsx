import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Link id="link" to='/'>Home</Link>
      <Link id="link" to='/carrito'>Carrito</Link>
      <Link id="link" to='/product'>product</Link>
      <Link id="link" to='/search'>buscar</Link>
    </div>
  );
};

export default Carrito;
