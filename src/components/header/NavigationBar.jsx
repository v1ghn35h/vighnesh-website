import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Nav className="me-auto ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#project">Projects</Nav.Link>
                <Nav.Link href="#contactMe">Contact Me</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavigationBar