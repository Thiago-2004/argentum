/* import "./carrito.css"

 function Carrito({carrito, eliminarCarrito}){
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((producto, index) => (
          <div key={index}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  ;
}

 export default Carrito */


import React, { useContext } from 'react';
import { CarritoContext } from './CarritoContext';
import './carrito.css';

function Carrito() {
  const { carrito, eliminarDelCarrito, limpiarCarrito, precioTotal } = useContext(CarritoContext);

  return (
    <div className="carrito-container">
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio.toFixed(2)}
                <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div>
            <p>Total de productos: {carrito.length}</p>
            <p>Precio Total: ${precioTotal.toFixed(2)}</p>
            <button className="btn limpiar" onClick={limpiarCarrito}>Limpiar carrito</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;

 