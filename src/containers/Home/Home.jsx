import React from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import L_home from '../../images/L_home.png';
import '../../styles/components/ProductS.scss';




const Home = () => {
  return (
    <div className="container text-center">
      <div>
      <nav className="nav">
      <div className="nav-item" id="carrito">
          <MdShoppingCart color='gray' size='30px' />
        <Link to='/carrito'></Link>
        </div>
        <div className="nav-item active" aria-current="page">
          <Link to='/'>
            <img src={L_home} className="logo_Home">
            </img></Link>
        </div>
      </nav>
      </div>
        
        <br /><br /><br /><div className="title-home">
        <h1>Nada como una Guajolota para empezar el día</h1>
      </div>
      <Product />
    </div>
  );
};

export default Home;
