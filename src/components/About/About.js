import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import galaxy from '../../lib/img/fibonacci-spiral-galaxy_bw.png'

class About extends Component {
  render () {
    return (
      <Fragment>
        <ImgContainer></ImgContainer>
      </Fragment>
    )
  }
}


// todo: sort out background image for landing page
const ImgContainer = styled.div`
  background-image: url('../../lib/img/fibonacci-spiral-galaxy_bw.png');
  width: 100vw;
  height: 100vh;
  
`

export default About
