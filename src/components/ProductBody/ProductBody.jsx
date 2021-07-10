/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdControlPoint, MdRemoveCircleOutline } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito } from '../../actions/index';
import { DivProductItem, DivSaboresProduct, ImgSaboresDefault, DivProductosSugerencia, DivSugerenciasContainer } from './styledProductBody';

const ProductBody = (props) => {
  const { products, keyProduct, añadirCarrito, eliminarCarrito, productosSugerencia, tipoSugerencia, carrito } = props;
  const keyProductToNumber = parseInt(keyProduct); //convertir el keyProduct de "1" string a 1 number;
  const productos = products.filter((product) => product.id === keyProductToNumber);// identificar que producto debo mostrar
  const product = productos[0];
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
  const handleChange = (evento, producto) => {
    if (evento.target.checked) {
      añadirCarrito(producto);
    } else {
      eliminarCarrito(producto);
    }
  };
  console.log(props.carrito);
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
      <DivSugerenciasContainer className='SugerenciaContainer'>
        <div className='Sugerencia_Presentacion'>
          <h3>Combo</h3>
          <p>
            Selecciona las
            {' '}
            {tipoSugerencia}
            {' '}
            que más te gusten y disfruta de tu desayuno.
          </p>
        </div>
        <DivProductosSugerencia className='Productos_sugerencia'>
          {productosSugerencia.map((productoSugerido) => {
            const isCarrito = carrito.filter((item) => item.id === productoSugerido.id);
            const isChecked = isCarrito.length > 0;
            return (
              <div key={productoSugerido.id}>
                <img src={productoSugerido.cover} alt={productoSugerido.title} />
                <h6>{productoSugerido.title}</h6>
                <p>
                  MXN
                  {' '}
                  {productoSugerido.price}
                </p>
                <input type='checkbox' onChange={(evento) => handleChange(evento, productoSugerido)} defaultChecked={isChecked} />
              </div>
            );
          })}
        </DivProductosSugerencia>
      </DivSugerenciasContainer>
      <div>
        <Link to='/carrito'>
          <button type='button'>
            Pagar en Carrito $
            {' '}
            {carrito.length > 0 ? carrito.reduce((acc, el) => acc + (el.price * el.pedido), 0) : 0}
          </button>
        </Link>

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
export default connect(mapStateToProps, mapDispatchToProps)(ProductBody);
