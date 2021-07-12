/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdControlPoint, MdRemoveCircleOutline } from 'react-icons/md';
import { añadirCarrito, eliminarCarrito } from '../../actions/index';
import { DivProductItem, DivSaboresProduct, ImgSaboresDefault, DivProductosSugerencia, DivSugerenciasContainer } from './styledProductBody';
import '../../styles/containers/Product.scss';

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
      <DivProductItem key={product.id} className="item">
        <img src={product.cover} alt={product.title}  width="150" height="150"/>
        <h1 className="titulos">{product.title}</h1>
        <p className="valor">
          MXN
          {' '}
          {product.price}
        </p>
        <p className="disponibles">
          Disponible
          {' '}
          {product.stock}
        </p>
        <div className="contador">
          <div  onClick={() => handleEliminarCarrito(product)}>
            <MdRemoveCircleOutline color='black' size='30px' />
          </div>
          <p id="numero" >{product.pedido}</p>
          <div  onClick={() => handleAñadirCarrito(product)}>
            <MdControlPoint color='black' size='30px' />
          </div>
        </div>
      </DivProductItem>
      <DivSaboresProduct className="sabores">
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
          <h3 className="titulos">Combo</h3>
          <p>
            Selecciona las
            {' '}
            {tipoSugerencia}
            {' '}
            que más te gusten y disfruta de tu desayuno.
          </p>
        </div>
        <DivProductosSugerencia className='Productos_sugerencia '>
          {productosSugerencia.map((productoSugerido) => {
            const isCarrito = carrito.filter((item) => item.id === productoSugerido.id);
            const isChecked = isCarrito.length > 0;
            return (
              <div  className="combo" key={productoSugerido.id}>
                       <input className="cajita" type='checkbox' onChange={(evento) => handleChange(evento, productoSugerido)} defaultChecked={isChecked} />
                <img src={productoSugerido.cover} alt={productoSugerido.title} />
                <h6>{productoSugerido.title}</h6>
                <p className="valorPequeño">
                  MXN
                  {' '}
                  {productoSugerido.price}
                </p>
         
              </div>
            );
          })}
        </DivProductosSugerencia>
      </DivSugerenciasContainer>
      <div>
        <Link to='/carrito'>
          <button type='button' className="boton-pago">
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
