/* eslint-disable import/prefer-default-export */
export const prueba = () => (dispatch, getState) => {
  return (dispatch, getState) => {
    console.log('se ejecuto prueba');
    dispatch({
      type: 'CARGANDO',
    });
  };
};
export const añadirCarrito = (producto) => (dispatch, getState) => {

  dispatch({
    type: 'ADD_CARRITO',
    payload: producto,
  });
  const seleccionarCategoriaProducto = () => {
    switch (producto.type) {
      case 'guajolotas':
        return getState().guajolotas;
      case 'tamales':
        return getState().tamales;
      case 'bebidas':
        return getState().bebidas;
      default:
        return undefined;
    }
  };
  const categoriaProducto = seleccionarCategoriaProducto();
  const categoriaActualizada = categoriaProducto.map((item) => {
    if (item.id === producto.id) {
      if (item.stock === 0) {
        return item;
      }
      return {
        ...item,
        stock: item.stock - 1,
        pedido: item.pedido + 1,
      };
    }
    return item;
  });
  switch (producto.type) {
    case 'guajolotas':
      dispatch({
        type: 'UPDATE_GUAJOLOTAS',
        payload: categoriaActualizada,
      });
      break;
    case 'tamales':
      dispatch({
        type: 'UPDATE_GUAJOLOTAS',
        payload: categoriaActualizada,
      });
      break;
    case 'bebidas':
      dispatch({
        type: 'UPDATE_GUAJOLOTAS',
        payload: categoriaActualizada,
      });
      break;
    default:
      break;
  }

};

export const eliminarCarrito = (producto) => (dispatch, getState) => {
  const { carrito } = getState();
  const productosEliminar = carrito.filter((item) => item.id === producto.id);
  const productosEliminadoListo = productosEliminar.slice(1);
  const productosActivos = carrito.filter((item) => item.id !== producto.id);
  const newCarrito = [...productosActivos, ...productosEliminadoListo];
  dispatch({
    type: 'DELETE_ITEM_CARRITO',
    payload: newCarrito,
  });
  const seleccionarCategoriaProducto = () => {
    switch (producto.type) {
      case 'guajolotas':
        return getState().guajolotas;
      case 'tamales':
        return getState().tamales;
      case 'bebidas':
        return getState().bebidas;
      default:
        return undefined;
    }
  };
  const categoriaProducto = seleccionarCategoriaProducto();//la idea es identificar el grupo de productos para agregar la solicitud de pedido al producto especifico
  const categoriaActualizada = categoriaProducto.map((item) => {
    //el proposito de esta funcion es disminuir el stock y aumentar la propiedad pedido del producto solicitado
    if (item.id === producto.id) {
      return {
        ...item,
        stock: item.stock + 1,
        pedido: item.pedido - 1,
      };
    }
    return item;
  });
  switch (producto.type) {
    case 'guajolotas':
      dispatch({
        type: 'UPDATE_GUAJOLOTAS',
        payload: categoriaActualizada,
      });
      break;
    case 'tamales':
      dispatch({
        type: 'UPDATE_TAMALES',
        payload: categoriaActualizada,
      });
      break;
    case 'bebidas':
      dispatch({
        type: 'UPDATE_BEBIDAS',
        payload: categoriaActualizada,
      });
      break;
    default:
      break;
  }
};

export const añadirCarritoSugerencia = (producto) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_CARRITO',
    payload: producto,
  });
  const seleccionarCategoriaProducto = () => {
    switch (producto.type) {
      case 'guajolotas':
        return getState().bebidas;
      case 'tamales':
        return getState().bebidas;
      case 'bebidas':
        return getState().guajolotas;
      default:
        return undefined;
    }
  };
  const categoriaProducto = seleccionarCategoriaProducto();
  const categoriaActualizada = categoriaProducto.map((item) => {
    if (item.id === producto.id) {
      if (item.stock === 0) {
        return item;
      }
      return {
        ...item,
        stock: item.stock - 1,
        pedido: item.pedido + 1,
      };
    }
    return item;
  });
  switch (producto.type) {
    case 'guajolotas':
      dispatch({
        type: 'UPDATE_GUAJOLOTAS',
        payload: categoriaActualizada,
      });
      break;
    case 'tamales':
      dispatch({
        type: 'UPDATE_TAMALES',
        payload: categoriaActualizada,
      });
      break;
    case 'bebidas':
      dispatch({
        type: 'UPDATE_BEBIDAS',
        payload: categoriaActualizada,
      });
      break;
    default:
      break;
  }

};
export const eliminarCarritoSugerencia = (producto) => (dispatch, getState) => {
  const { carrito } = getState();
  const productosEliminar = carrito.filter((item) => item.id === producto.id);
  const productosEliminadoListo = productosEliminar.slice(1);
  const productosActivos = carrito.filter((item) => item.id !== producto.id);
  const newCarrito = [...productosActivos, ...productosEliminadoListo];
  dispatch({
    type: 'DELETE_ITEM_CARRITO',
    payload: newCarrito,
  });
  const seleccionarCategoriaProducto = () => {
    switch (producto.type) {
      case 'guajolotas':
        return getState().bebidas;
      case 'tamales':
        return getState().bebidas;
      case 'bebidas':
        return getState().guajolotas;
      default:
        return undefined;
    }
  };
  const categoriaProducto = seleccionarCategoriaProducto();//la idea es identificar el grupo de productos para agregar la solicitud de pedido al producto especifico
  const categoriaActualizada = categoriaProducto.map((item) => {
    //el proposito de esta funcion es disminuir el stock y aumentar la propiedad pedido del producto solicitado
    if (item.id === producto.id) {
      return {
        ...item,
        stock: item.stock + 1,
        pedido: item.pedido - 1,
      };
    }
    return item;
  });
  switch (producto.type) {
    case 'guajolotas':
      dispatch({
        type: 'UPDATE_GUAJOLOTAS',
        payload: categoriaActualizada,
      });
      break;
    case 'tamales':
      dispatch({
        type: 'UPDATE_TAMALES',
        payload: categoriaActualizada,
      });
      break;
    case 'bebidas':
      dispatch({
        type: 'UPDATE_BEBIDAS',
        payload: categoriaActualizada,
      });
      break;
    default:
      break;
  }
};
