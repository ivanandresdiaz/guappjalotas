import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/search.scss';

const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      <Link id='link' to='/'>Home</Link>
      <Link id='link' to='/carrito'>Carrito</Link>
      <Link id='link' to='/product'>product</Link>
      <Link id='link' to='/search'>search</Link>

      <div className='component-search'>
        <div className='tab-content' id='content-search'>
          <div className='tab-pane fade show active p-3' id='tab1' role='tabpanel' aria-labelledby='tab1-tab'>
            <div className='row'>
              <div className='col-md-12'>
                <form className='d-flex mt-2' id='frm-buscar-productos'>
                  <img src='https://img.icons8.com/ios/32/000000/search--v1.png' alt='Search' />
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Sabor de guajolotas'
                    id='txt-buscar-productos'
                    aria-label='Search'
                  />
                  <button className='btn btn-outline-primary' type='submit' id='btn-cancel'>
                    <i
                      className='bi bi-rainbow'
                    />
                    cancelar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='search-result'>
        <figure className='img-div'>
          <img className='img-search' src='https://i.ibb.co/vzZ0ZWG/feather-search.png' alt='' />
          <figcaption className='text-img'><strong>Realiza una busqueda</strong></figcaption>
        </figure>

      </div>

    </div>

  );
};

export default Search;
