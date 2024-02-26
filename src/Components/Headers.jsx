import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Headers() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <img className='me-1' src="./logo.png" alt="" />
          <Navbar.Brand href="#home">CAREOS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About-us</Nav.Link>
            <Nav.Link href="#pricing">Cars</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
          </Nav>
          <button className='btn btn-warning'>order</button>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers