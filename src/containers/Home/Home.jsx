import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { prueba } from '../../actions/index';
import IconosUsar from '../IconosUsar';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <MdAccountCircle size='5rem' color='red' />
      </div>
      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/product'>product</Link>
      <Link to='/search'>buscar</Link>
      <h1>Iconos a utilizar</h1>
      <button type='button' onClick={() => props.prueba()}>Prueba</button>
      <IconosUsar />
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
