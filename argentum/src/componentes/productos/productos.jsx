/*import './productos.css'
import React, { useEffect, useState } from 'react'
import { fetchProductos } from "./api";


function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductos()
        (data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <section id="productos" className="product-section">
    <div className="container">
        <h1 className="animate__animated animate__rubberBand tittle">Nuestros productos</h1>
        <div className="product-container">
          {(<div className="product">
            {productos.map((producto) =>
              <div key={producto.nombre} className="product-info">
                <h3>{producto.nombre}</h3>
                <p>precio: {producto.precio}</p>
                <img src={producto.imagen} alt="banda" />
                <button className="btn">Agregar a carrito</button>
              </div>
            )}
          </div>
          )}
        </div>
    </div>
    </section>
  )
}
export default Productos */



/* const [mostrarDetalles, setMostrarDetalles] = useState(false);
const handleClicEnBotonDetalles = () => {
  setMostrarDetalles(!mostrarDetalles);
}
return (
  <section id="productos" className="product-section">
    <div className="container">
      <h1 className="animate__animated animate__rubberBand tittle">Nuestros productos</h1>
      <div className="product-container">
        <div className="product">
          <img src={p1} alt="banda" />
          <div className="product-info">
            <h3>Banda func</h3>
            <p>Precio: $XX.XX</p>
            <button className="btn" onClick={handleClicEnBotonDetalles}>
              {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
            </button>
            {mostrarDetalles && (
              <div className='detallesProductos'>
                <h2> Informacion del producto </h2>
              </div>
            )}
            <button className="btn">Agregar a carrito</button>
          </div>
        </div>
        <div className="product">
          <img src={p2} alt="conos" />
          <div className="product-info">
            <h3>Producto 2</h3>
            <p>Precio: $XX.XX</p>
            <button className="btn" onClick={handleClicEnBotonDetalles}>
              {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
            </button>
            {mostrarDetalles && (
              <div className='detallesProductos'>
                <h3> Informacion del producto </h3>
              </div>
            )}
            <button className="btn">Agregar a carrito</button>
          </div>
        </div>

        <div className="product">
          <img src={p3} alt="Disco" />
          <div className="product-info">
            <h3>Producto 3</h3>
            <p>Precio: $XX.XX</p>

            <button className="btn" onClick={handleClicEnBotonDetalles}> {
              mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}

            </button>
            {mostrarDetalles && (
              <div className='detallesProductos'>
                <h3> Informacion del producto </h3>
              </div>
            )}
            <button className="btn">Agregar a carrito</button>
          </div>
        </div>

        <div className="product">
          <img src={p4} alt="Argentum Sports" />
          <div className="product-info">
            <h3>Producto 4</h3>
            <p>Precio: $XX.XX</p>
            <button className="btn" onClick={handleClicEnBotonDetalles}> {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}</button>
            {mostrarDetalles && (
              <div className='detallesProductos'>
                <h2> Informacion de contacto </h2>
              </div>
            )}
            <button className="btn">Agregar a carrito</button>
          </div>
        </div>
      </div>
    </div>
  </section>
)  */






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
    { id: 1, nombre: 'Banda func', precio: 20000, imagen: p1, descripcion: 'dfsfddf' , },
    { id: 2, nombre: 'Conos ranurados', precio: 50000, imagen: p2, descripcion : 'dfsdfsfsd', },
    { id: 3, nombre: 'Disco balance', precio: 40000, imagen: p3, descripcion: 'ddfsdfsdfdfsdfds' , },
    { id: 4, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfdfsfsdfd',},
    { id: 5, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfsdfsdfds',},
    { id: 6, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfsdfdf',},
    { id: 7, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfsfsdfdsf',},
    { id: 8, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfsdfd',},
    { id: 9, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfsdfsf',},
    { id: 10, nombre: 'Mat pilates', precio: 30000, imagen: p4 , descripcion : 'dfsdfdfsd',},
    { id: 11, nombre: 'Mat pilates', precio: 30000, imagen: p4, descripcion: 'fdsfd' , },
    { id: 12, nombre: 'Mat pilates', precio: 30000, imagen: p4, descripcion: 'dsfsdfsdd', } ,
  ];

  return (
    <section id="productos" className="product-section">
      <div className="container">
        <h1 className="animate__animated animate__rubberBand tittle"></h1>
        <div className="product-container">
          {productos.map(producto => (
            <div className="product" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="product-info">
                <h3>{producto.nombre}</h3>
                <p>Precio: {producto.precio}</p>
                <button className="btn" onClick={handleClicEnBotonDetalles}>
                  {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
                </button>
                {mostrarDetalles && (
                  <div className='detallesProductos'>
                    <h2> Información del producto </h2>
                  </div>
                )}
                <button className="btn" onClick={() => handleAgregarAlCarrito(producto)}>Agregar a carrito 🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Productos;
