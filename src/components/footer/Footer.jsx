import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { footerSocialsData } from '../../../data'; 

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='footer-navbar' id='contactMe'>
        <Container className='d-flex justify-content-center'>
          {footerSocialsData.map((social, index) => (
            <Nav.Link key={index} href={social.link} target="_blank" className='mx-3' >
              {social.icon}
            </Nav.Link>
          ))}
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
