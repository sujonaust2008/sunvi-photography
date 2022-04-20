import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from './CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user]=useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" fixed='top' variant="dark">
            <Container>
                <Navbar.Brand href="#home">Sunvi-Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navStyle">
                        <Nav.Link><CustomLink to ="/">Home</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/blogs">Blogs</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/services">Services</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to ="/about">About</CustomLink></Nav.Link>
                        {   user?.uid ? 
                            <Button variant="link" onClick={handleSignOut} className="text-decoration-none text-white">SignOut</Button>
                            :
                            <Nav.Link><CustomLink to ="/login">LogIn</CustomLink></Nav.Link>}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
         </Navbar>
    );
};

export default Header;