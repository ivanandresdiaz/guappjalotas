import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import CardProductCarrito from '../../components/CardProductCarrito/CardProductCarrito';
import Header from '../../components/Header/Header';
import Portal from '../Portal/Portal';
import ModalCarrito from '../../components/ModalCarrito/ModalCarrito';
import '../../styles/containers/Product.scss';
const Carrito = (props) => {
  const { carrito } = props;
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [productoModal, setProductoModal] = useState([]);
  const handleOpenCloseModal = useCallback(
    (producto) => {
      setProductoModal(producto);
      setVisibilityModal(!visibilityModal);
    },
    [visibilityModal],
  );
  return (
    <div>
      <Header />
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <section>
          <div>
            {carrito.map((producto) => <CardProductCarrito key={producto.id} producto={producto} handleOpenCloseModal={handleOpenCloseModal} />)}
            <div className="total">
              <h3>Total a pagar</h3>
              <p className="precioPagar">{carrito.reduce((acc, el) => acc + (el.price * el.pedido), 0)}</p>
            </div>
            <button type='button' className="boton-pago">Pagar</button>
          </div>
          <Portal isOpen={visibilityModal}>
            <ModalCarrito handleOpenCloseModal={handleOpenCloseModal} producto={productoModal} />
          </Portal>
        </section>

      ) : (
        <div>
          <MdShoppingCart color='gray' size='150px' />
          <h2>No hay productos</h2>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
  };
};

export default connect(mapStateToProps, null)(Carrito);
