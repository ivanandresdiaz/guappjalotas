/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdControlPoint } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito } from '../../actions/index';

const ModalCarrito = (props) => {
  const { añadirCarrito, eliminarCarrito, producto, handleOpenCloseModal } = props;
  const handleAñadirCarrito = (producto) => {
    if (producto.stock > 0) {
      añadirCarrito(producto);
    }

  };
  const handleEliminarCarrito = (producto) => {
    if (producto.pedido > 0) {
      eliminarCarrito(producto);
    }
  };
  return (
    <div key={producto.id}>
      <button type='button' onClick={() => handleOpenCloseModal(producto)}>Cerrar</button>
      <img src={producto.cover} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p>
        MXN
        {' '}
        {producto.price}
      </p>
      <p>
        Disponible
        {' '}
        {producto.stock}
      </p>
      <div>
        <div onClick={() => handleEliminarCarrito(producto)}>
          <MdRemoveCircleOutline color='blue' size='30px' />
        </div>
        <p>{producto.pedido}</p>
        <div onClick={() => handleAñadirCarrito(producto)}>
          <MdControlPoint color='blue' size='30px' />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  añadirCarrito, eliminarCarrito,
};

export default connect(null, mapDispatchToProps)(ModalCarrito);
