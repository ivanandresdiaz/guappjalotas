import React from 'react';
import { MdSearch } from 'react-icons/md';
import { DivSearcher, InputSearcher } from './styledSearcher';

const Seacher = () => {
  return (
    <DivSearcher>
      <MdSearch color='gray' size='30px' />
      <InputSearcher type='text' placeholder='Sabor de Guajalotas, bebidas y tamales' />
    </DivSearcher>
  );
};

export default Seacher;
