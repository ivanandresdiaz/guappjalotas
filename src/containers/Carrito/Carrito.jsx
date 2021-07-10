import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { prueba } from '../../actions/index';
import CardProductCarrito from '../../components/CardProductCarrito/CardProductCarrito';
import Header from '../../components/Header/Header';

const Carrito = (props) => {
  const { carrito } = props;
  return (
    <div>
      <Header />
      <h1>Carrito</h1>
      {carrito.length > 0 ?
        carrito.map((producto) => <CardProductCarrito key={producto.id} producto={producto} />) :
        <h1>No hay productos</h1>}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
  };
};
const mapDispatchToProps = {
  prueba,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);
