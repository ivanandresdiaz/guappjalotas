const reducer = (state, action) => {
  switch (action.type) {
    case 'CARGANDO':
      return { ...state, cargando: true };
    default:
      return state;
  }
};
export default reducer;
