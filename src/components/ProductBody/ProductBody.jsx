/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdControlPoint, MdRemoveCircleOutline } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito, añadirCarritoSugerencia, eliminarCarritoSugerencia } from '../../actions/index';
import { DivProductItem, DivSaboresProduct, ImgSaboresDefault, DivProductosSugerencia } from './styledProductBody';

const ProductBody = (props) => {
  const { products, keyProduct, añadirCarrito, eliminarCarrito, productosSugerencia, tipoSugerencia, añadirCarritoSugerencia, eliminarCarritoSugerencia, carrito } = props;
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
  const handleChange = (evento, producto) => {
    if (evento.target.checked) {
      añadirCarritoSugerencia(producto);
    } else {
      eliminarCarritoSugerencia(producto);
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
      <div className='SugerenciaContainer'>
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
          {productosSugerencia.map((producto) => {
            const isCarrito = carrito.filter((item) => item.id === producto.id);
            const isChecked = isCarrito.length > 0;
            return (
              <div key={producto.id}>
                <img src={producto.cover} alt={producto.title} />
                <h6>{producto.title}</h6>
                <p>
                  MXN
                  {' '}
                  {producto.price}
                </p>
                <input type='checkbox' onChange={(evento) => handleChange(evento, producto)} defaultChecked={isChecked} />
              </div>
            );
          })}
        </DivProductosSugerencia>
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
  añadirCarritoSugerencia,
  eliminarCarritoSugerencia,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductBody);
