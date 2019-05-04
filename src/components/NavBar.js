import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {Link,} from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  render() {
    return (
      <>
      <Navbar class='navbar' collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link to='/'>
        <Navbar.Brand>Z-KASA</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <Link to='/contact'>
              <NavDropdown.Item href="contact">Request a Bid</NavDropdown.Item>
              </Link>
              <Link to='/ourwork'>
              <NavDropdown.Item href="ourwork">Our Work</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to='/aboutus'>
              <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to='/contact'>
            <Nav.Link href="#deets">Contact</Nav.Link>
            </Link>

            <Nav.Link eventKey={2} href="#memes">
              Call 801-910-4715
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar bg="primary" variant="dark">

      </Navbar> */}
      </>
    )
  }
}

export default NavBar