const reducer = (state, action) => {
  switch (action.type) {
    case 'CARGANDO':
      return { ...state, cargando: true };
    case 'ADD_CARRITO':
      return { ...state, carrito: [...state.carrito, action.payload] };
    case 'DELETE_ITEM_CARRITO':
      return { ...state, carrito: [...action.payload] };
    case 'UPDATE_GUAJOLOTAS':
      return { ...state, guajolotas: action.payload };
    case 'UPDATE_TAMALES':
      return { ...state, tamales: action.payload };
    case 'UPDATE_BEBIDAS':
      return { ...state, bebidas: action.payload };
    default:
      return state;
  }
};
export default reducer;
