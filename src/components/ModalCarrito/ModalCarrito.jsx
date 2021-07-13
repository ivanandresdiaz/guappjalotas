import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdControlPoint } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito } from '../../actions/index';
import '../../styles/containers/Product.scss';

const ModalCarrito = (props) => {
  const { añadirCarrito, eliminarCarrito, modalProducto, handleOpenCloseModal, tamales, bebidas, guajolotas } = props;
  const conectarProductoRender = () => {
    switch (modalProducto.type) {
      case 'guajolotas':
        return guajolotas.filter((item) => item.id === modalProducto.id);
      case 'tamales':
        return tamales.filter((item) => item.id === modalProducto.id);
      case 'bebidas':
        return bebidas.filter((item) => item.id === modalProducto.id);
      default:
        break;
    }
  };
  const productoCasi = conectarProductoRender();
  const producto = productoCasi[0];
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
    <div className="bordeado">
    <div key={producto.id} className='item'>
      {//hay que poner clases mas descriptivas, Item es muy generalistas
      }
      <img src={producto.cover} alt={producto.title} />
      <h1 className='titulos'>{producto.title}</h1>
      <p className='valor'>
        MXN
        {' '}
        {producto.price}
      </p>
      <p className='disponibles'>
        Disponible
        {' '}
        {producto.stock}
      </p>
      <div className='contador'>
        <div onClick={() => handleEliminarCarrito(producto)}>
          <MdRemoveCircleOutline color='black' size='30px' />
        </div>
        <p>{producto.pedido}</p>
        <div onClick={() => handleAñadirCarrito(producto)}>
          <MdControlPoint color='black' size='30px' />

        </div>
      </div>
      <button type='button' className='actualizar' onClick={() => handleOpenCloseModal(producto)}>Actualizar</button>
      <br />
      <button type='button' className='btn-cerrar' onClick={() => handleOpenCloseModal(producto)}>Cerrar</button>
    </div>
    </div>
  );
};

const mapDispatchToProps = {
  añadirCarrito, eliminarCarrito,
};
const mapStateToProps = (state) => {
  return {
    tamales: state.tamales,
    bebidas: state.bebidas,
    guajolotas: state.guajolotas };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalCarrito);