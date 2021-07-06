import React from 'react';
import { NavLink } from 'react-router-dom';
import bebida from "../../images/bebida.png";
import tamal from "../../images/tamal.png";
import guajalota from "../../images/guajalota.png";
import '../../styles/components/ProductS.scss';
//detalle producto 
import {DetailProduct} from '../Product/DetailProduct'



const Product = () => {
  return (
    <div>
      <div className="products">
      <h1>Product</h1>
        < NavLink exact activeClassName="nav-product" to='/product'>Guajolotas</NavLink>
        < NavLink exact activeClassName="nav-product" to='/product'>Bebidas</NavLink>
        < NavLink exact activeClassName="nav-product" to='/product'>Tamales</NavLink>
      </div>
      <section className="guajolotas">
            <div className="card">
              <img className="card-img" src={guajalota} alt="Card"/>
              <div className="card-body">
                <h1 className="product-name">Verde</h1>
                <p className="card-text">$12 MXN</p>
              </div>
            </div>
        </section>
        <section className="bebidas">
            <div className="card">
              <img className="card-img" src={bebida} alt="Card"/>
              <div className="card-body">
                <h1 className="product-name">Champurrado</h1>
                <p className="card-text">$50 MXN</p>
              </div>
            </div>
        </section>
        <section className="tamales">
            <div className="card">
              <img className="card-img" src={tamal} alt="Card"/>
              <div className="card-body">
                <h1>Tamal Verde </h1>
                <p className="card-text">50 MXN</p>
              </div>
            </div>
        </section>
        <DetailProduct />
    </div>
  );
};

export default Product;
