import React from 'react';
import { DivCardProductCarritoContainer } from './styledCardProductCarrito';

const CardProductCarrito = (props) => {
  const { producto } = props;
  return (
    <DivCardProductCarritoContainer>
      <div>
        <img src={producto.cover} alt={producto.title} />
      </div>
      <div>
        <p>{producto.title}</p>
        <p>{producto.pedido}</p>
      </div>
      <div>
        <p>{producto.price}</p>
      </div>
    </DivCardProductCarritoContainer>
  );
};

export default CardProductCarrito;
