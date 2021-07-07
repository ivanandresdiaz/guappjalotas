import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { prueba } from '../../actions/index';
import Product from '../Product/Product';
import lHome from '../../images/L_home.png';
import '../../styles/components/ProductS.scss';

const Home = (props) => {
  return (
    <div className='container text-center'>
      <div>
        <nav className='nav'>
          <div className='nav-item' id='carrito'>
            <MdShoppingCart color='gray' size='30px' />
            <Link to='/carrito' />
          </div>
          <div className='nav-item active' aria-current='page'>
            <Link to='/'>
              <img src={lHome} className='logo_Home' alt='LHome' />
            </Link>
          </div>
        </nav>
      </div>
      <br />
      <br />
      <br />
      <div className='title-home'>
        <h1>Nada como una Guajolota para empezar el día</h1>
      </div>
      <Product />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    cargando: state.cargando,
  };
};
const mapDispatchToProps = {
  prueba,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
