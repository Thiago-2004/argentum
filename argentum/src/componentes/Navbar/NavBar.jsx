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
    <Navbar expand="lg" sticky="top" className="bg-light fs-3">
      <Container>
        <Navbar.Brand href="/">
          <img className='logo' src={logo} alt="Argentum Sports" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/carrito">🛒 ({cantidadTotalProductos})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;




