/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdControlPoint } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito } from '../../actions/index';
import '../../styles/containers/Product.scss';
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
    <div key={producto.id} className="item">
     
      <img src={producto.cover} alt={producto.title} />
      <h1 className="titulos">{producto.title}</h1>
      <p  className="valor">
        MXN
        {' '}
        {producto.price}
      </p>
      <p  className="disponibles">
        Disponible
        {' '}
        {producto.stock}
      </p>
      <div className="contador">
        <div onClick={() => handleEliminarCarrito(producto)}>
          <MdRemoveCircleOutline color='black' size='30px' />
        </div>
        <p>{producto.pedido}</p>
        <div onClick={() => handleAñadirCarrito(producto)}>
          <MdControlPoint color='black' size='30px' />
       
        </div>
      </div>
      <button type='button' className="actualizar" onClick={() => handleOpenCloseModal(producto)}>Actualizar</button>
      <br />
      <button type='button' className="btn-cerrar" onClick={() => handleOpenCloseModal(producto)}>Cerrar</button>
    </div>
  );
};

const mapDispatchToProps = {
  añadirCarrito, eliminarCarrito,
};

export default connect(null, mapDispatchToProps)(ModalCarrito);
