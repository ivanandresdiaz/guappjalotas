import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { añadirCarrito } from '../../actions/index';
import CarouselProducts from '../../components/CarouselProducts/CarouselProducts';
import Header from '../../components/Header/Header';
import '../../styles/containers/Product.scss';

const Product = (props) => {
  const [carouselProducts, setCarouselProducts] = useState([]);
  const { guajolotas, bebidas, tamales, match: { params: { type, key } }, añadirCarrito } = props;
  const handleRenderCarouselProducts = (grupoProductos) => {
    // el proposito de carouselProducts es identificar que grupo de productos se rendizarn en el Carousel.
    //se utiliza el type que se enviar por los parametros de la URL de React-router-dom.
    switch (grupoProductos) {
      case 'guajolotas':
        setCarouselProducts(guajolotas) ;
        break;
      case 'bebidas':
        setCarouselProducts(bebidas);
        break;
      case 'tamales':
        setCarouselProducts(tamales);
        break;
      default:
        return null;
    }
  };
  useEffect(() => {
    handleRenderCarouselProducts(type);
  }, []);
  console.log(props);
  return (
    <div>
      <Header />
      <CarouselProducts products={carouselProducts} keyProduct={key} añadirCarrito={añadirCarrito} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    guajolotas: state.guajolotas,
    bebidas: state.bebidas,
    tamales: state.tamales,
  };
};
const mapDispatchToProps = {
  añadirCarrito,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
