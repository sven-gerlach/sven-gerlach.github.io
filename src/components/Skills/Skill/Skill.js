import React, { Component } from 'react'
import styled from 'styled-components'
import skillsLibrary from './skillsLibrary'

class Skill extends Component {
  render () {
    let skillsJSX = []
    for (const [key, obj] of Object.entries(skillsLibrary)) {
      skillsJSX.push(
        <ImgContainer key={key}>
          <Img src={obj.logo} alt={`${key} logo`} />
          <P>{key}</P>
        </ImgContainer>
      )
    }
    return (
      <>
        {skillsJSX}
      </>
    )
  }
}

const ImgContainer = styled.div`
  width: 23%;
  height: 200px;
  background-color: rgba(250,250,250,0.8);
  border-radius: 20px;
  padding-bottom: 10%;
  margin-bottom: 2%;
  position: relative;

  @media (max-width: 767px) {
    width: 32%;
    padding-bottom: 32%;
  }

  @media (max-width: 575px) {
    height: 150px;
  }
`

const Img = styled.img`
  display: block;
  max-width: 80%;
  max-height: 100px;
  margin: 20px auto;
  text-align: center;
  
  @media (max-width: 575px) {
    max-width: 50%;
    max-height: 60px;
  }
`

const P = styled.p`
  margin: 10px auto;
  left: 0;
  right: 0;
  color: black;
  font-weight: bolder;
  font-size: 1.4rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  line-height: 25px;
  
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 575px) {
    font-size: 1.1rem;
  }
`

export default Skill
