import './productos.css'
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
                <h3>{producto.name}</h3>
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
export default Productos






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