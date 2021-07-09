const reducer = (state, action) => {
  switch (action.type) {
    case 'CARGANDO':
      return { ...state, cargando: true };
    case 'ADD_CARRITO':
      return { ...state, carrito: [...state.carrito, action.payload] };
    default:
      return state;
  }
};
export default reducer;
