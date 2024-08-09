 import React, { createContext, useState } from 'react';

 export const CarritoContext = createContext();
 import { v4 as uuidv4 } from 'uuid';


export const CarritoPro = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [
      ...prevCarrito,
      { ...producto, id: uuidv4() } 
    ]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(producto => producto.id !== id));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);

  const cantidadTotalProductos = carrito.length;

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, precioTotal, cantidadTotalProductos }}>
      {children}
    </CarritoContext.Provider>
  );
};
