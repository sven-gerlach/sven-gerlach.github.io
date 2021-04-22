import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import SkillComponents from './Skill/Skill'

class Skills extends Component {
  render () {
    return (
      <ImgContainer>
        <Container>
          <Row>
            <Col>
              <Element name='skills' className='element'><H2>TECH SKILLS</H2></Element>
            </Col>
          </Row>
          <RowContainer>
            <SkillComponents />
          </RowContainer>
        </Container>
      </ImgContainer>
    )
  }
}

const ImgContainer = styled.div`
  background-color: rgb(43,43,43);
  margin-top: 56px;
  height: 100%;
`

const RowContainer = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
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

export default Skills
