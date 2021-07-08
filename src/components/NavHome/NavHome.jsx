import React from 'react';
import classNames from 'classnames';
import { DivNav, ButtonNav } from './styledNavHome';

const NavHome = (props) => {
  const { handleNavLoad, currentFocus } = props;
  // la PROP CURRENT FOCUS recibe el tipo de Comida
  // que se esta renderizando [guajolotas,tamales,bebidas]
  // le asigno el classname Currentfocus, la cual cambia los colores.

  // La PROP HandleNavLoad le agrego un onClick para que cambien el estado de CurrentFocus y renderize las cards correspondientes guajolotas || tamales || bebidas
  switch (currentFocus) {
    case 'guajolotas':
      return (
        <DivNav>
          <ButtonNav className='currentFocus' onClick={() => handleNavLoad('guajolota')} type='button'>Guapjalotas</ButtonNav>
          <ButtonNav onClick={() => handleNavLoad('bebidas')} type='button'>Bebidas</ButtonNav>
          <ButtonNav onClick={() => handleNavLoad('tamales')} type='button'>Tamales</ButtonNav>
        </DivNav>
      );
    case 'bebidas':
      return (
        <DivNav>
          <ButtonNav onClick={() => handleNavLoad('guajolota')} type='button'>Guapjalotas</ButtonNav>
          <ButtonNav className='currentFocus' onClick={() => handleNavLoad('bebidas')} type='button'>Bebidas</ButtonNav>
          <ButtonNav onClick={() => handleNavLoad('tamales')} type='button'>Tamales</ButtonNav>
        </DivNav>
      );
    case 'tamales':
      return (
        <DivNav>
          <ButtonNav onClick={() => handleNavLoad('guajolota')} type='button'>Guapjalotas</ButtonNav>
          <ButtonNav onClick={() => handleNavLoad('bebidas')} type='button'>Bebidas</ButtonNav>
          <ButtonNav className='currentFocus' onClick={() => handleNavLoad('tamales')} type='button'>Tamales</ButtonNav>
        </DivNav>
      );
    default:
      return (
        <DivNav>
          <ButtonNav className='currentFocus' onClick={() => handleNavLoad('guajolota')} type='button'>Guapjalotas</ButtonNav>
          <ButtonNav onClick={() => handleNavLoad('bebidas')} type='button'>Bebidas</ButtonNav>
          <ButtonNav onClick={() => handleNavLoad('tamales')} type='button'>Tamales</ButtonNav>
        </DivNav>
      );
      break;
  }

};

export default NavHome;
