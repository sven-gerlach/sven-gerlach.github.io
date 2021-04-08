import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import imgCode from './../../lib/img/AI-logic_effects.png'

class Skills extends Component {
  render () {
    return (
      <ImgContainer>
        <Container>
          <Row>
            <Col>
              <SkillsContainer>
                <Element name='skills' className='element'><H2 id='about'>TECHNICAL SKILLS</H2></Element>
              </SkillsContainer>
            </Col>
          </Row>
        </Container>
      </ImgContainer>
    )
  }
}

const ImgContainer = styled.div`
  background-image: url(${imgCode});
  background-size: cover;
  background-position: left;
  margin-top: 56px;
  height: calc(100vh - 56px);
`

const H2 = styled.h2`
  color: rgb(202, 120, 50);
  text-align: center;
  margin: 20px 0 20px 0;
  letter-spacing: 4px;
`

const SkillsContainer = styled.div`
  margin-top: 30px;
  background-color: rgba(0,0,0,0.5);
  padding: 30px;
  border-radius: 70px;
  color: rgb(169, 182, 197);
`

export default Skills
