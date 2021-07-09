import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MdControlPoint, MdRemoveCircleOutline } from 'react-icons/md';
import { DivCarouselProducts, DivProductItem } from './styledCarouselProducts';

const CarouselProducts = (props) => {
  const [ordenar, setOrdenar] = useState(0);
  const { products, keyProduct, añadirCarrito } = props;
  console.log('carousel products', props);
  return (
    <DivCarouselProducts>
      {products.map((product) => (
        <DivProductItem key={product.id}>
          <img src={product.cover} alt={product.title} />
          <h4>{product.title}</h4>
          <p>
            MXN
            {' '}
            {product.price}
          </p>
          <div>

            <div>
              <MdRemoveCircleOutline color='blue' size='30px' />
            </div>
            <p>{ordenar}</p>
            <div onClick={() => añadirCarrito(product)}>
              <MdControlPoint color='blue' size='30px' />
            </div>
          </div>
        </DivProductItem>
      ))}
    </DivCarouselProducts>
  );
};

const mapStateToProps = (state) => {
  return { carrito: state.carrito };
};
export default connect(mapStateToProps, null)(CarouselProducts);
