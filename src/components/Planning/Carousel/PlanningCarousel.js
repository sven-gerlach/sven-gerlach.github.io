import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

// import images for carousel
import userStories from './../../../lib/img/planning/1-user-stories.png'

// impossible to make these images legible on screen
// import wireframes from './../../../lib/img/planning/2-Wireframes.png'
// import erd from './../../../lib/img/planning/3-ERD.png'
import kanbanFrontEnd from './../../../lib/img/planning/4-Kanban Planning_front-end.png'
import kanbanBackEnd from './../../../lib/img/planning/5-Kanban Planning_back-end.png'
import kanbanProject from './../../../lib/img/planning/6-Kanban-project-planning.png'
import readme from './../../../lib/img/planning/7-Readme.png'

class PlanningCarousel extends Component {
  render () {
    return (
      <CarouselDiv id='carousel'>
        <Carousel
          interval={null}
        >

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={userStories}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>User Stories</h3>
              <p>I identify user stories which drive my UX/UI design choices</p>
              <p>I draft wireframes to effectively address these use cases</p>
              <p>At this point, I will also draft an interim ERD</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kanbanFrontEnd}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Kanban: Front-End</h3>
              <p>Based on the wireframes, I develop a detailed front-end Kanban</p>
              <p>This includes anticipated front-end SPA routes and components</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kanbanBackEnd}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Kanban: Back-End</h3>
              <p>Now is the time to refine the draft ERD</p>
              <p>Subsequently, I draft a detailed back-end Kanban</p>
              <p>Includes all envisioned models, views, routes, and curl scripts</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kanbanProject}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Kanban: Project</h3>
              <p>Consolidate planning/time management with project Kanban</p>
              <p>Review of all Kanbans every morning/evening for progress</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={readme}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Readme</h3>
              <p>Many aspects of the readme fall out of my detailed planning</p>
              <p>I populate the readme over the course of the project</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselDiv>
    )
  }
}

const CarouselDiv = styled.div`
  height: 500px;
  overflow: hidden;
  img {
    height: 400px !important;
  }
`

export default PlanningCarousel
