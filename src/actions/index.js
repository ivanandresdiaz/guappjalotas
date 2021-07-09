/* eslint-disable import/prefer-default-export */
export const prueba = () => (dispatch, getState) => {
  return (dispatch, getState) => {
    console.log('se ejecuto prueba');
    dispatch({
      type: 'CARGANDO',
    });

    const { cargando } = getState();
  };
};
export const añadirCarrito = (payload) => (dispatch) => {
  dispatch({
    type: 'ADD_CARRITO',
    payload,
  });
};
