import './Navbar.css'
import logo from '../../assets/imagenes/logo.png'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Argentum Sports" />
          </div>
          <nav>
            <ul>
              <li><Link to = '/'>Inicio</Link></li>
              <li><Link to = '/productos'>Productos</Link></li>
              <li><Link to = '/contacto'>Contactos</Link></li>
              <li><Link to = '/carrito'>Carrito</Link></li>
            </ul>
          </nav>
        </div>
      

    )
}

export default Navbar