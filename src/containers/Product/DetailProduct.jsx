import React from "react";
import guajalota from "../../images/guajalota.png";
import rajas from "../../images/rajas.png";
import bebida from "../../images/bebida.png";
import { MdChevronLeft } from "react-icons/md";
import "../../styles/components/DetailS.scss";

export const DetailProduct = () => {
  return (
    <div>
      <div className="product">
        <div className="atras">
          <MdChevronLeft color="gray" size="30px" />
        </div>
        <div className="card-product">
          <img className="img-product" src={guajalota} alt="Card" />
          <div className="card-body-producto">
            <h1 className="product-name">Guajolota de Tamal Verde</h1>
            <p className="product-value">$12 MXN</p>
          </div>
        </div>
        <div className="combos">
          <div className="">
            <h1 className="Guajolocombo">Combos</h1>
            <p>
              Selecciona la bebida que más te guste y disfruta de tu desayuno.
            </p>
          </div>
        </div>
        <div className="sabores">
          <h1>Sabor</h1>
          <div className="grid-sabores">
            <div className="item-1">
              <img className="img-product" src={rajas} alt="Card" />
            </div>
            <div class="item-2">
              <img className="img-product" src={rajas} alt="Card" />
            </div>
            <div className="item-3">
              <img className="img-product" src={rajas} alt="Card" />
            </div>
            <div className="item-4">
              <img className="img-product" src={rajas} alt="Card" />
            </div>
            <div className="item-5">
              <img className="img-product" src={rajas} alt="Card" />
            </div>
            <div className="item-6">
              <img className="img-product" src={rajas} alt="Card" />
            </div>
          </div>
        </div>
        <div className="check-product">
          <h1>Bebidas</h1>
          <p>Selecciona la bebida que más te guste y disfruta de tu desayuno</p>
          <div className="grid-product">
            <div className="item-1">
              <div className="card-check">
                <img className="card-img" src={bebida} alt="Card" />
                <div className="card-body-check">
                  <h1>Champurrado</h1>
                  <p className="card-text">+ $12 MXN</p>
                  <div className="btn-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-2">
              <div className="card-check">
                <img className="card-img" src={bebida} alt="Card" />
                <div className="card-body-check">
                  <h1>Champurrado</h1>
                  <p className="card-text">+ $12 MXN</p>
                  <div className="btn-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-3">
              <div className="card-check">
                <img className="card-img" src={bebida} alt="Card" />
                <div className="card-body-check">
                  <h1>Champurrado</h1>
                  <p className="card-text">+ $12 MXN</p>
                  <div className="btn-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-4">
              <div className="card-check">
                <img className="card-img" src={bebida} alt="Card" />
                <div className="card-body-check">
                  <h1>Champurrado</h1>
                  <p className="card-text-check">+ $12 MXN</p>
                  <div className="btn-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
