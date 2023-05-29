import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <div>
    <div>

      <Navbar bg="dark" variant="dark">
        <Container className="container-fluid py-2">
        <NavLink className="navbar-brand mx-auto fw-bold" to="/"><img src="https://i.imgflip.com/4cxvd2.jpg?a467640" alt="" width="80px"/></NavLink>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about">Quem somos</NavLink>
            <NavLink className="nav-link" to="/products">Produtos</NavLink>
            <NavLink className="nav-link" to="/contact">Contato</NavLink>
          </Nav>
        </Container>
      </Navbar>
            </div>
                    
        </div>
                
        </>
    )
}

export default Header;
