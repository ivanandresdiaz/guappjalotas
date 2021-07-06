import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import App from './routes/App';
import './styles/Global.scss';

import reducers from './reducers/index';

const initialState = {
  'users': [],
  'cargando': false,
  'carrito': [],
  'tamales': [
    {
      'id': 1,
      'title': 'Tamal verde',
      'price': 25,
      'stock': 5,
      'taste': 'verde',
      'cover': 'https://i.imgur.com/zVrJ656.png',
      'tasteCover': 'https://i.imgur.com/z6qc9bH.png',
    },
    {
      'id': 2,
      'title': 'Tamal de mole',
      'price': 23,
      'stock': 3,
      'taste': 'mole',
      'cover': 'https://i.imgur.com/VRrcN9g.png',
      'tasteCover': 'https://i.imgur.com/UE569Ry.png',
    },
    {
      'id': 3,
      'title': 'Tamal de guayaba',
      'price': 25,
      'stock': 4,
      'taste': 'verde',
      'cover': 'https://i.imgur.com/jFNpEoB.png',
      'tasteCover': 'https://i.imgur.com/y0hMETi.png',
    },
    {
      'id': 4,
      'title': 'Tamal de piña',
      'price': 30,
      'stock': 1,
      'taste': 'piña ',
      'cover': 'https://i.imgur.com/toZGX7v.png',
      'tasteCover': 'https://i.imgur.com/7aekofq.png',
    },
    {
      'id': 5,
      'title': 'Tamal de pasas',
      'price': 20,
      'stock': 1,
      'taste': 'pasas',
      'cover': 'https://i.imgur.com/z1JkAZs.png',
      'tasteCover': 'https://i.imgur.com/3XWzRhs.png',
    },
    {
      'id': 6,
      'title': 'Tamal de rajas',
      'price': 15,
      'stock': 0,
      'taste': 'pasas',
      'cover': 'https://i.imgur.com/z1JkAZs.png',
      'tasteCover': 'https://i.imgur.com/3XWzRhs.png',
    },
  ],
  'bebidas ': [
    {
      'id': 21,
      'title': 'Champurrado',
      'price': 5,
      'stock': 5,
      'cover': 'https://i.imgur.com/odIrVAr.png',
      'tasteCover': 'https://i.imgur.com/ZfOHphQ.png',
    },
    {
      'id': 22,
      'title': 'Atole de arroz con Leche',
      'price': 6,
      'stock': 10,
      'cover': 'https://i.imgur.com/TLwjj2W.png',
      'tasteCover': 'https://i.imgur.com/svPiElK.png',
    },
    {
      'id': 23,
      'title': 'Chocolate Caliente',
      'price': 10,
      'stock': 10,
      'cover': 'https://i.imgur.com/GDbxBk8.png',
      'tasteCover': 'https://i.imgur.com/p28irMF.png',
    },
    {
      'id': 24,
      'title': 'Cafe Negro',
      'price': 5,
      'stock': 20,
      'cover': 'https://i.imgur.com/Asw74EK.png',
    },
  ],
  'guajolotas': [
    {
      'id': 31,
      'title': 'Guapjalota verde',
      'price': 25,
      'stock': 5,
      'taste': 'verde',
      'cover': 'https://i.imgur.com/c425TU1.png',
      'tasteCover': 'https://i.imgur.com/z6qc9bH.png',
    },
    {
      'id': 32,
      'title': 'Guagjalota de mole',
      'price': 23,
      'stock': 3,
      'taste': 'mole',
      'cover': 'https://i.imgur.com/R11MIb2.png',
      'tasteCover': 'https://i.imgur.com/UE569Ry.png',
    },
    {
      'id': 33,
      'title': 'Guagjalota de guayaba',
      'price': 25,
      'stock': 4,
      'taste': 'verde',
      'cover': 'https://i.imgur.com/3V50gVG.png',
      'tasteCover': 'https://i.imgur.com/y0hMETi.png',
    },
    {
      'id': 34,
      'title': 'Guagjalota de piña',
      'price': 30,
      'stock': 1,
      'taste': 'piña ',
      'cover': 'https://i.imgur.com/clbExPI.png',
      'tasteCover': 'https://i.imgur.com/7aekofq.png',
    },
    {
      'id': 35,
      'title': 'Guagjalota de pasas',
      'price': 20,
      'stock': 1,
      'taste': 'pasas',
      'cover': 'https://i.imgur.com/c425TU1.png',
      'tasteCover': 'https://i.imgur.com/3XWzRhs.png',
    },
    {
      'id': 36,
      'title': 'Guagjalota de rajas',
      'price': 15,
      'stock': 0,
      'taste': 'rajas',
      'cover': 'https://i.imgur.com/c425TU1.png',
      'tasteCover': 'https://i.imgur.com/3XWzRhs.png',
    },
  ],
};
const store = createStore(
  reducers, //reducer
  initialState, //estado inicial
  applyMiddleware(reduxThunk),
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('app'),
);
