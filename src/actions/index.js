/* eslint-disable import/prefer-default-export */
export const añadirCarrito = (producto) => (dispatch, getState) => {
  const { carrito } = getState();
  const isProductInCarrito = carrito.find((productoConsulta) => {
    return productoConsulta.id === producto.id;
  });
  const isProductInCarritoBoolean = !!isProductInCarrito;
  if (isProductInCarritoBoolean) {
    const carritoActualizado = carrito.map((item) => {
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
    dispatch({
      type: 'UPDATE_CARRITO',
      payload: carritoActualizado,
    });
  } else {
    const productoEnviarReducer = {
      ...producto,
      stock: producto.stock - 1,
      pedido: producto.pedido + 1,
    };
    dispatch({
      type: 'ADD_CARRITO',
      payload: productoEnviarReducer,
    });
  }

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

export const eliminarCarrito = (producto) => (dispatch, getState) => {
  const { carrito } = getState();
  if (producto.pedido > 1) {
    const carritoActualizado = carrito.map((item) => {
      if (item.id === producto.id) {
        return {
          ...item,
          stock: item.stock + 1,
          pedido: item.pedido - 1,
        };
      }
      return item;
    });
    dispatch({
      type: 'UPDATE_CARRITO',
      payload: carritoActualizado,
    });
  } else {
    const productosActivos = carrito.filter((item) => item.id !== producto.id);
    const newCarrito = [...productosActivos];
    dispatch({
      type: 'DELETE_ITEM_CARRITO',
      payload: newCarrito,
    });
  }

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

export const toggleModal = (producto) => (dispatch, getState) => {
  dispatch({
    type: 'TOGGLE_MODAL',
  });
};
