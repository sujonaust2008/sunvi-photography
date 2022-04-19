import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Sunvi-Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navStyle">
                        <Nav.Link><CustomLink to ="/home">Home</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/blogs">Blogs</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/services">Services</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/about">About</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/login">LogIn</CustomLink></Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
         </Navbar>
    );
};

export default Header;