import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import aiImage from './../../lib/img/AI-logic_effects.png'
import Carousel from './Carousel/PlanningCarousel'

class Planning extends Component {
  render () {
    return (
      <ImageContainer className='mt-5'>
        <Container>
          <Row>
            <Col>
              <Element name='planning' className='element'><H2>Planning</H2></Element>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel />
            </Col>
          </Row>
        </Container>
      </ImageContainer>
    )
  }
}

const ImageContainer = styled.div`
  background-image: url(${aiImage});
  background-size: cover;
  background-position: left;
  margin-top: 56px;
`

const H2 = styled.h2`
  color: rgb(202, 120, 50);
  text-align: center;
  margin: 60px auto;
  letter-spacing: 4px;
  background-color: rgba(250,250,250,1);
  border-radius: 20px;
  padding: 10px 0;
`

export default Planning
