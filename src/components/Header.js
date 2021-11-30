import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container className="">
                    <Navbar.Brand href="/" className="text-center fs-1">LaManuBox</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="fst-italic">Assistant de selection</Nav.Link>
                        {/* <Nav.Link href="#features">Qui sommes nous ?</Nav.Link> */}
                        {/* <Nav.Link href="#pricing">Choisir mon Box</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;