import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
  render () {
    return (
      <header>
        <Navbar bg="light" expand="sm" collapseOnSelect='true' fixed='top'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="/#skills">Skills</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#resume">Resume</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
export default Header
