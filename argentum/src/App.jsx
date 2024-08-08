/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/Navbar/NavBar'
import Seccion from './componentes/seccion/Seccion'
import Productos from './componentes/productos/productos'
import Footer from './componentes/Footer/Footer.jsx'
import ContactForm from './componentes/Contacto/Contacto.jsx'
import Carrito from './componentes/carrito/Carrito.jsx'

function App() {

  return (
    <>
    <Router>
      <div className='contenedor'>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Seccion />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/contacto' element={<ContactForm />} />
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
          </main>
        </div>
        <Footer/>
    </Router>
    </>
  )
}

export default App*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar1 from './componentes/Navbar/NavBar.jsx'
import Seccion from './componentes/seccion/Seccion.jsx'
import Productos from './componentes/productos/productos.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import ContactForm from './componentes/Contacto/Contacto.jsx'
import Carrito from './componentes/carrito/Carrito.jsx'
import { CarritoPro } from './componentes/carrito/CarritoContext.jsx';


function App() {
  return (
    <CarritoPro>
      <Router>
        <div className='contenedor'>
          <Navbar1 />
          <main>
            <Routes>
              <Route path='/' element={<Seccion />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/contacto' element={<ContactForm />} />
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CarritoPro>
  );
}

export default App;