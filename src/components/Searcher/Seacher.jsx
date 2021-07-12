/* eslint-disable eqeqeq */
import React from 'react';

import { MdSearch } from 'react-icons/md';

import { DivSearcher, InputSearcher } from './styledSearcher';

const Seacher = (props) => {
  const { handleSearch, busqueda } = props;
  return (
    <DivSearcher>
      <MdSearch color='gray' size='30px' />
      <InputSearcher type='text' placeholder='Sabor de Guajalotas, bebidas y tamales' onChange={handleSearch} value={busqueda} />
    </DivSearcher>
  );
};

export default Seacher;
