 import './Navbar.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import logo from '../../assets/imagenes/logo.png';
 import { Link } from 'react-router-dom';
 import React, { useContext } from 'react';
 import { CarritoContext } from '../carrito/CarritoContext';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';

  function Navbar1() {
   const { cantidadTotalProductos } = useContext(CarritoContext);
   return (
     <Navbar expand="lg" sticky="top" className="bg-celeste fs-3">
       <Container>
         <Navbar.Brand as={Link} to="/argentum">
           <img className='logo' src={logo} alt="Argentum Sports" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mx-auto">
             <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
             <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
             <Nav.Link as={Link} to="/carrito">🛒 ({cantidadTotalProductos})</Nav.Link>
          </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   );
 }

 export default Navbar1;



