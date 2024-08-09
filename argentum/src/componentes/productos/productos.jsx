import './productos.css';
import p1 from "../../assets/imagenes/bandafunc.png";
import p2 from "../../assets/imagenes/conosranurados.png";
import p3 from "../../assets/imagenes/discobalanc.png";
import p4 from "../../assets/imagenes/matpilates.png";
import React, { useContext, useState } from 'react';
import { CarritoContext } from '../carrito/CarritoContext.jsx';

function Productos() {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleClicEnBotonDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
  };

  const productos = [
    { id: 1, nombre: 'Banda func', precio: 80000, imagen: p1 },
    { id: 2, nombre: 'Conos ranurados', precio: 5000, imagen: p2 },
    { id: 3, nombre: 'Disco balance', precio: 10000, imagen: p3 },
    { id: 4, nombre: 'Mat pilates', precio: 10000, imagen: p4 },
    { id: 4, nombre: 'Mat pilates', precio: 10000, imagen: p4 },
    { id: 4, nombre: 'Mat pilates', precio: 50000, imagen: p4 },
    { id: 4, nombre: 'Mat pilates', precio: 10000, imagen: p4 },
    { id: 4, nombre: 'Mat pilates', precio: 10000, imagen: p4 },
  ];

  return (
    <section id="productos" className="product-section">
      <div className="container">
        <h1 className="animate__animated animate__rubberBand tittle">Nuestros productos</h1>
        <div className="product-container">
          {productos.map(producto => (
            <div className="product" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="product-info">
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio.toFixed(2)}</p>
                <button className="btn" onClick={handleClicEnBotonDetalles}>
                  {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
                </button>
                {mostrarDetalles && (
                  <div className='detallesProductos'>
                    <h2> Información del producto </h2>
                  </div>
                )}
                <button className="btn" onClick={() => handleAgregarAlCarrito(producto)}>Agregar a carrito🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Productos;

