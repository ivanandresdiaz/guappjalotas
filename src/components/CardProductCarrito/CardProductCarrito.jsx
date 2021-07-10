import React from 'react';
import { DivCardProductCarritoContainer } from './styledCardProductCarrito';
import Portal from '../../containers/Portal/Portal';
import ModalCarrito from '../ModalCarrito/ModalCarrito';

const CardProductCarrito = (props) => {
  const { producto, handleOpenCloseModal, visibilityModal } = props;
  return (
    <div>
      <DivCardProductCarritoContainer onClick={() => handleOpenCloseModal(producto)}>
        <div>
          <img src={producto.cover} alt={producto.title} />
        </div>
        <div>
          <p>{producto.title}</p>
          <p>
            cantidad
            {' '}
            {producto.pedido}
          </p>
        </div>
        <div>
          <p>{producto.price * producto.pedido}</p>
        </div>
      </DivCardProductCarritoContainer>

    </div>

  );
};

export default CardProductCarrito;
