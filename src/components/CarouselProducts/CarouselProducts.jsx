import React from 'react';
import { DivCarouselProducts, DivProductItem } from './styledCarouselProducts';

const CarouselProducts = (props) => {
  const { products, keyProduct } = props;
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
        </DivProductItem>
      ))}
    </DivCarouselProducts>
  );
};

export default CarouselProducts;
