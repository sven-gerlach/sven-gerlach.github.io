import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

import {
  Link,
  animateScroll as scroll
} from 'react-scroll'


class Header extends Component {
  render () {
    return (
      <header>
        <NavbarStyled bg="light" expand="sm" collapseOnSelect='true' fixed='top'>
          <NavbarTextStyled className='navbar-brand' onClick={() => scroll.scrollToTop()}>Sven</NavbarTextStyled>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='about' spy={true} smooth='easeInOutQuad' duration={1500} offset={-100} >About</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='skills' spy={true} smooth='easeInOutQuad' duration={1500} offset={-100} >Skills</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='projects' spy={true} smooth='easeInOutQuad' duration={1500} offset={-100} >Projects</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='' spy={true} smooth='easeInOutQuad' duration={1500} offset={-100} >Resume</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='' spy={true} smooth='easeInOutQuad' duration={1500} offset={-100} >Contact</LinkStyled>
            </Nav>
          </Navbar.Collapse>
        </NavbarStyled>
      </header>
    )
  }
}

const NavbarStyled = styled(Navbar)`
  box-shadow: 0 3px 7px 1px rgba(0,0,0,.07),0 -3px 7px 1px rgba(0,0,0,.07)
`

const LinkStyled  = styled(Link)`
  :hover {
    cursor: pointer;
  }
`

const NavbarTextStyled = styled(Navbar.Text)`
  :hover {
    cursor: pointer;
  }
`

export default Header
