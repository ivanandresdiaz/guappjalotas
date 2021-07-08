import React from 'react';
import { ContainerMayor } from './styledLayout';

const Layout = ({ children }) => {
  // utilizo el Layout para que toda la aplicacion no se mas grande de 415px. esto con motivos de falta de tiempo para hacer la version desktop de la App
  return (
    <>
      <ContainerMayor>
        {children}
      </ContainerMayor>
    </>

  );
};

export default Layout;
