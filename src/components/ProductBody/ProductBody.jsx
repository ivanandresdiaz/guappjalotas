/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdControlPoint, MdRemoveCircleOutline } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito } from '../../actions/index';
import { DivProductItem, DivSaboresProduct, ImgSaboresDefault } from './styledProductBody';

const CarouselProducts = (props) => {
  const { products, keyProduct, añadirCarrito, eliminarCarrito, productoSugerencia } = props;
  const keyProductToNumber = parseInt(keyProduct); //convertir el keyProduct de "1" string a 1 number;
  const productos = products.filter((product) => product.id === keyProductToNumber);// identificar que producto debo mostrar
  const product = productos[0];
  const handleAñadirCarrito = (producto) => {
    añadirCarrito(producto);
  };
  const handleEliminarCarrito = (producto) => {
    if (producto.pedido > 0) {
      eliminarCarrito(producto);
    }
  };
  return (
    <section>
      <DivProductItem key={product.id}>
        <img src={product.cover} alt={product.title} />
        <h4>{product.title}</h4>
        <p>
          MXN
          {' '}
          {product.price}
        </p>
        <p>
          Disponible
          {' '}
          {product.stock}
        </p>
        <div>
          <div onClick={() => handleEliminarCarrito(product)}>
            <MdRemoveCircleOutline color='blue' size='30px' />
          </div>
          <p>{product.pedido}</p>
          <div onClick={() => handleAñadirCarrito(product)}>
            <MdControlPoint color='blue' size='30px' />
          </div>
        </div>
      </DivProductItem>
      <DivSaboresProduct>
        {products.map((producto) => {
          if (producto.id === keyProductToNumber) {
            return (
              <div key={producto.id}>
                <Link to={`/producto/${producto.type}/${producto.id}`}>
                  <img src={producto.tasteCover} alt={producto.title} />
                </Link>
              </div>
            );
          }
          return (
            <div key={producto.id}>
              <Link to={`/producto/${producto.type}/${producto.id}`}>
                <ImgSaboresDefault src={producto.tasteCover} alt={producto.title} />
              </Link>
            </div>
          );
        })}
      </DivSaboresProduct>
      <div className='bebidas'>
        <div className='bebidas_Presentacion'>
          <h3>Bebidas</h3>
          <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
        </div>

      </div>
    </section>

  );
};

const mapStateToProps = (state) => {
  return { carrito: state.carrito };
};
const mapDispatchToProps = {
  añadirCarrito,
  eliminarCarrito,
};
export default connect(mapStateToProps, mapDispatchToProps)(CarouselProducts);
