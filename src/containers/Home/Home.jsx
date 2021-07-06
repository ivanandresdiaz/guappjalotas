import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import IconosUsar from '../IconosUsar';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <MdAccountCircle size='5rem' color='red' />
      </div>

      <Link id="link" to='/'>Home</Link>
      <Link id="link" to='/carrito'>Carrito</Link>
      <Link id="link" to='/product'>product</Link>
      <Link id="link" to='/search'>search</Link>
      <h1>Iconos a utilizar</h1>
      <IconosUsar />
    </div>
  );
};

export default Home;
