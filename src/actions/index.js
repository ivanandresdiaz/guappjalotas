/* eslint-disable import/prefer-default-export */
export const prueba = () => {
  return (dispatch, getState) => {
    console.log('se ejecuto prueba');
    dispatch({
      type: 'CARGANDO',
    });

    const { cargando } = getState();
  };
};
