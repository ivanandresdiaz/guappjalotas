import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdChevronLeft } from 'react-icons/md';
import '../../styles/components/Header.scss';

const Header = (props) => {
  const { isHome } = props;
  return (
    <section className='Header'>
      <div className='Header__body'>
        {isHome ? (
          <Link to='/'>
            <img src='https://i.imgur.com/CRvnTAf.png' alt='Logo' />
          </Link>
        ) : (
          <Link to='/' className='Header__icon-container'>
            <MdChevronLeft color='#0D0D0D' size='30px' />
          </Link>
        )}
        <div className='Header__icon-container'>
          <MdShoppingCart color='#AEAEAE' size='3rem' />
        </div>
      </div>
    </section>
  );
};

export default Header;
