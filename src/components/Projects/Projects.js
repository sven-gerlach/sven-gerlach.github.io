import React, {Component} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import { Element } from "react-scroll";
import styled from "styled-components";

class Projects extends Component {
  render () {
    return (
      <Container className='mt-5'>
        <Row>
          <Col>
            <Element name='projects' className='element'><H2>PROJECTS</H2></Element>
          </Col>
        </Row>
      </Container>
    )
  }
}

const H2 = styled.h2`
  color: rgb(202, 120, 50);
  text-align: center;
  margin: 30px 0 60px 0;
  letter-spacing: 4px;
`

export default Projects
