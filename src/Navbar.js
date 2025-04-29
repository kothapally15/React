import react from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){

    return(
        // <div>
        //     <ul style={{display: 'flex', justifyContent:'space-around'}}>
        //         <Link to='/'><li>Home</li></Link>
        //         <Link to='/dashboard'><li>Dashboard</li></Link>
        //         <Link to='/about'><li>About</li></Link>
        //     </ul>
        // </div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My Sample Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/task">Task</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar;