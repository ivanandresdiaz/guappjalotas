import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/components/CardProduct.scss';

const CardProduct = (props) => {

  const { producto } = props;
  return (
    <Link to={`/producto/${producto.type}/${producto.id}`} className='CardProductLink'>
      <section className='Home__product-card'>
        <div className='CardProduct__container-img'>
          <img className='card-img' src={producto.cover} alt={producto.title} />
        </div>
        <div className='card-body'>
          <h1 className='product-name'>{producto.title}</h1>
          <p className='card-text'>
            {producto.price}
            {' '}
            MXN
          </p>
          <p className='card-text'>
            {' '}
            unidades disponibles:
            {producto.stock}
          </p>

        </div>
      </section>
    </Link>
  );
};

export default connect()(CardProduct);
