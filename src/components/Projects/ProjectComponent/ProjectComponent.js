import React, {Component} from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ticTacToe from './../../../lib/img/projects/tic-tac-toe.png'
import workoutTracker from './../../../lib/img/projects/workout-tracker.jpg'

class ProjectComponent extends Component {
  render () {
    return (
      <OuterContainer>
        <Card>
          <Card.Img variant="top" src={workoutTracker} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </OuterContainer>
    )
  }
}

const OuterContainer = styled.div`
  position: relative;
`

const ProjectImg = styled.img`
  width: 100%;
`

const AlphaDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 500ms ease-in-out;
  :hover {
    background-color: rgba(0,0,0,0.8);
    cursor: pointer;
  }
`

export default ProjectComponent
