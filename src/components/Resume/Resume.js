import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import aiImage from './../../lib/img/AI-logic_effects.png'

class Resume extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Element name='resume' className='element'><H2>RESUME</H2></Element>
          </Col>
        </Row>
        <Row>
          <Col>
            <IframeStyled
              src='https://onedrive.live.com/embed?cid=8026BD6A4D875F09&resid=8026BD6A4D875F09%216634&authkey=AHCnLmnUt9pwR-M&em=2'
              loading='lazy'
              allowFullScreen={true}
              frameborder='0'
              scrolling='yes'
            >
            </IframeStyled>
          </Col>
        </Row>
      </Container>
    )
  }
}

const H2 = styled.h2`
  color: rgb(202, 120, 50);
  text-align: center;
  margin: 60px auto;
  letter-spacing: 4px;
  border-radius: 20px;
  width: min(400px, 100%);
  padding: 10px 0;
`

const IframeStyled = styled.iframe`
  display: block;
  width: 100%;
  height: 120vh;
  margin-bottom: 60px;
  border: 1px solid rgb(215,215,215);
`

export default Resume

