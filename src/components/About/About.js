import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import imgCode from './../../lib/img/Code_effects.png'

class About extends Component {
  render () {
    return (
      <Fragment>
        <ImgContainer>
          <TextContainer>
            <H1>Sven Gerlach</H1>
            <P>| FULL STACK DEVELOPER |</P>
          </TextContainer>
        </ImgContainer>
      </Fragment>
    )
  }
}

const ImgContainer = styled.div`
  background-image: url(${imgCode});
  background-size: cover;
  background-position: left;
  margin-top: 56px;
  height: calc(100vh - 56px);
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  background-color: rgba(0,0,0,0.5);
  padding: 30px;
  border-radius: 70px;
`

const H1 = styled.h1`
  color: white;
  font-size: 5rem;
`

const P = styled.p`
  color: white;
  font-size: 1rem;
`

export default About
