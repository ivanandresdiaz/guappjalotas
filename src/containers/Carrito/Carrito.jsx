import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { toggleModal, modalFalse } from '../../actions';
import CardProductCarrito from '../../components/CardProductCarrito/CardProductCarrito';
import Header from '../../components/Header/Header';
import Portal from '../Portal/Portal';
import ModalCarrito from '../../components/ModalCarrito/ModalCarrito';
import '../../styles/containers/Product.scss';

const Carrito = (props) => {
  const { carrito, modal, toggleModal, modalFalse } = props;
  const [productoModal, setProductoModal] = useState([]);
  const handleOpenCloseModal = (producto) => {
    toggleModal();
    setProductoModal(producto);
  };
  useEffect(() => {
    modalFalse();
  }, []);
  //PARA JORGE.
  console.log(carrito);
  //PARA JORGE
  return (
    <div>
      <Header />
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <section>
          <div>
            {carrito.map((producto) => <CardProductCarrito key={producto.id} producto={producto} handleOpenCloseModal={handleOpenCloseModal} />)}
            <div className='total'>
              <h3>Total a pagar</h3>
              <p className='precioPagar'>{carrito.reduce((acc, el) => acc + (el.price * el.pedido), 0)}</p>
            </div>
            <button type='button' className='boton-pago'>Pagar</button>
          </div>
          <Portal isOpen={modal}>
            <ModalCarrito handleOpenCloseModal={handleOpenCloseModal} modalProducto={productoModal} />
          </Portal>
        </section>

      ) :(
        <section>
        <div className="margin-up">
          <MdShoppingCart color='gray' size='450px' />
          <h2 className="titulos margen-izq">No hay productos</h2>

        
        </div>
   
          <button type='button' className="boton-pago">Pagar</button>
          </section>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
    modal: state.modal,
  };
};
const mapDispatchToProps = {
  toggleModal,
  modalFalse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);