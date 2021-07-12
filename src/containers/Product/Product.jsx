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
        return <ProductBody className="producto" products={guajolotas} keyProduct={key} productosSugerencia={bebidas}  tipoSugerencia='bebidas' />;
      case 'bebidas':
        return <ProductBody products={bebidas} keyProduct={key} productosSugerencia={guajolotas} tipoSugerencia='torta' />;
      case 'tamales':
        return <ProductBody products={tamales} keyProduct={key} productosSugerencia={bebidas} tipoSugerencia='bebidas' />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
     
      {
        
        resolveRoute( <div className="producto">

        </div>)
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
