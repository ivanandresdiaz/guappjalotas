import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/product'>product</Link>
      <Link to='/search'>buscar</Link>
      
      <div class="component-search">
        <div class="tab-content" id="content-search">
            <div class="tab-pane fade show active p-3" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                <div class="row">
                    <div class="col-md-12">
                        <form class="d-flex mt-2" id="frm-adicionar-ciclista">
                        <img src="https://img.icons8.com/ios/32/000000/search--v1.png"/>
                            <input class="form-control me-2" type="search" placeholder="Sabor de guajolotas"
                                id="txt-buscar-ciclistas" aria-label="Search"/>
                            <button class="btn btn-outline-primary" type="submit" id="btn-cancel"><i
                                    class="bi bi-rainbow"></i>cancelar</button>
                            </form>
                    </div>
                    </div>
                    </div>
                    </div>
    </div>

      <div className="search-result" >
          <figure>
            <img src="https://i.ibb.co/vzZ0ZWG/feather-search.png" alt="" />
            <figcaption>Realiza una busqueda</figcaption>
          </figure>
          
      </div>

    </div>

  );
};

export default Search;
