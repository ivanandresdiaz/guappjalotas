import React, { useCallback, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CardProduct from '../../components/CardProduct/CardProduct';
import Searcher from '../../components/Searcher/Seacher';

const Search = (props) => {
  const { tamales, bebidas, guajolotas } = props;
  const productos = [...tamales, ...bebidas, ...guajolotas];
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = useCallback(
    (evento) => {
      setBusqueda(evento.target.value);
    },
    [busqueda],
  ) ;
  const filteredProducts = useMemo(() => productos.filter((producto) => {
    return producto.title.toLowerCase().includes(busqueda.toLowerCase());
  }), [productos, busqueda]);

  return (
    <div>
      <Header />
      <Searcher handleSearch={handleSearch} busqueda={busqueda} />
      {filteredProducts.map((producto) => <CardProduct key={producto.id} producto={producto} />)}
    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    tamales: state.tamales,
    bebidas: state.bebidas,
    guajolotas: state.guajolotas,
  };
};

export default connect(mapStateToProps, null)(Search);
