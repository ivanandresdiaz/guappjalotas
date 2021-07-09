import React from 'react';
import { connect } from 'react-redux';
import ProductBody from '../../components/ProductBody/ProductBody';
import Header from '../../components/Header/Header';
import '../../styles/containers/Product.scss';

const Product = (props) => {
  const { guajolotas, bebidas, tamales, match: { params: { type, key } } } = props;
  const resolveRoute = () => {
    switch (type) {
      case 'guajolotas':
        return <ProductBody products={guajolotas} keyProduct={key} productoSugerencia={bebidas} />;
      case 'bebidas':
        return <ProductBody products={bebidas} keyProduct={key} />;
      case 'tamales':
        return <ProductBody products={tamales} keyProduct={key} productoSugerencia={bebidas} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      {
        resolveRoute()
      }
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

export default connect(mapStateToProps, null)(Product);
