import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {Link,} from 'react-router-dom'
import './navbar.css'
import {Image,} from 'semantic-ui-react'
import Logo from '../Images/whitepro.jpeg'

class NavBar extends React.Component {
  render() {
    return (
      <>
      <Navbar class='navbar' collapseOnSelect expand="md" >
        <Link to='/'>
        <Navbar.Brand>Pro Movers</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              {/* <Link to='/contact'>
              <NavDropdown.Item href="contact">Request a Bid</NavDropdown.Item>
              </Link> */}
              <Link to='/ourwork'>
              <NavDropdown.Item href="ourwork">Our Work</NavDropdown.Item>
              </Link>
              {/* <NavDropdown.Divider />
              <Link to='/aboutus'>
              <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
              </Link> */}
            </NavDropdown>
          </Nav>
          <div class='logo'>
                <Image src={Logo}/>
          </div>
          <Nav>
            {/* <Link to='/contact'> */}
            <Nav.Link>Contact</Nav.Link>
            {/* </Link> */}

            <Nav.Link eventKey={2} >
              Call John 801-381-9920
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
}


export default NavBar