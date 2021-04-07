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
        <Navbar bg="light" expand="sm" collapseOnSelect='true' fixed='top'>
          <Navbar.Brand href='/#landing-page' onClick={() => scroll.scrollToTop()}>Sven</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='about' spy={true} smooth='easeInOutQuad' duration={1500} >About</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='' spy={true} smooth='easeInOutQuad' duration={1500} >Skills</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='' spy={true} smooth='easeInOutQuad' duration={1500} >Projects</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='' spy={true} smooth='easeInOutQuad' duration={1500} >Resume</LinkStyled>
              <LinkStyled activeClass='active' className='element my-auto mx-2 nav-link' to='' spy={true} smooth='easeInOutQuad' duration={1500} >Contact</LinkStyled>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

const LinkStyled  = styled(Link)`
  :hover {
    cursor: pointer;
  }
`

export default Header
