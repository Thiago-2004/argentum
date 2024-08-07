 import "./carrito.css"

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

 export default Carrito
