import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CardProduct from '../../components/CardProduct/CardProduct';
import Searcher from '../../components/Searcher/Seacher';
import '../../styles/containers/Home.scss';
import NavHome from '../../components/NavHome/NavHome';

const Home = (props) => {
  const { tamales, bebidas, guajolotas } = props;
  const [renderizar, setRenderizar] = useState(guajolotas);
  const handleNavLoad = useCallback(
    (producto) => {
      // el proposito de este useCallback es para saber cuales cards debe renderizar [guajolotas||bebidas||tamales]
      switch (producto) {
        case 'guajolotas':
          setRenderizar(guajolotas);
          break;
        case 'bebidas':
          setRenderizar(bebidas);
          break;
        case 'tamales':
          setRenderizar(tamales);
          break;
        default:
          setRenderizar(guajolotas);
          break;
      }
    },
    [renderizar],
  );
  return (
    <div>
      {/* envio la prop booleana para especificar que el Header es de Home, y asi validar los iconos de la navegacion correspondiente */}
      <Header isHome />
      <h1 className='Home_Greeting'>Nada como una Guajolota para empezar el día</h1>
      <Searcher />
      <NavHome handleNavLoad={handleNavLoad} currentFocus={renderizar[0].type} />
      <div className='Home__container-products'>
        {renderizar.map((producto) => <CardProduct key={producto.id} producto={producto} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    cargando: state.cargando,
    tamales: state.tamales,
    bebidas: state.bebidas,
    guajolotas: state.guajolotas,
  };
};
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//
