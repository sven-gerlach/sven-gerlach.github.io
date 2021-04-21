import React, {Component} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import { Element } from "react-scroll";
import styled from "styled-components";
import ProjectComponent from './ProjectComponent/ProjectComponent'
import projects from './ProjectComponent/ComponentContent'
import { v4 as uuid } from 'uuid'

class Projects extends Component {
  render () {
    const projectJSX = []
    for (const project of projects) {
      projectJSX.push(
        <ProjectComponent
          key={uuid()}
          img={project.img}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          buttons={project.buttons}
        />
      )
    }

    return (
      <Container className='mt-5'>
        <Row>
          <Col>
            <Element name='projects' className='element'><H2>PROJECTS</H2></Element>
          </Col>
        </Row>
        <DivStyled>
          {projectJSX}
        </DivStyled>
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

const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 30px;
  align-items: stretch;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`


export default Projects
