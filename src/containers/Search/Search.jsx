import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/search.scss';

const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      <Link id="link" to='/'>Home</Link> 
      <Link id="link" to='/carrito'>Carrito</Link> 
      <Link id="link" to='/product'>product</Link>
      <Link id="link" to='/search'>search</Link>
      
      <div class="component-search">
        <div class="tab-content" id="content-search">
            <div class="tab-pane fade show active p-3" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                <div class="row">
                    <div class="col-md-12">
                        <form class="d-flex mt-2" id="frm-buscar-productos">
                        <img src="https://img.icons8.com/ios/32/000000/search--v1.png"/>
                            <input class="form-control me-2" type="search" placeholder="Sabor de guajolotas"
                                id="txt-buscar-productos" aria-label="Search"/>
                            <button class="btn btn-outline-primary" type="submit" id="btn-cancel"><i
                                    class="bi bi-rainbow"></i>cancelar</button>
                            </form>
                    </div>
                    </div>
                    </div>
                    </div>
    </div>

      <div className="search-result" >
          <figure className="img-div">
            <img className="img-search" src="https://i.ibb.co/vzZ0ZWG/feather-search.png" alt="" />
            <figcaption className="text-img"><strong>Realiza una busqueda</strong></figcaption>
          </figure>
          
      </div>

    </div>

  );
};

export default Search;
