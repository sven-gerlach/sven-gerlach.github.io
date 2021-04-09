import React, { Component } from 'react'
import styled from 'styled-components'
import imgCode from './../../lib/img/Code_effects.png'
import imgGitHub from './../../lib/img/GitHub-Mark-Light-120px-plus.png'
import imgLinkedIn from '../../lib/img/LinkedIn.png'
import {Col, Container, Row} from "react-bootstrap";
import { scroller } from 'react-scroll'

class LandingPage extends Component {
  render () {
    return (
      <>
        <ImgContainer>
          <Container>
            <Row>
              <Col>
                <TextContainer>
                  {/*todo: consider using Jetbrains font and design some key phrases like code*/}
                  <H1>Sven Gerlach</H1>
                  <P>| &nbsp; FULL STACK DEVELOPER &nbsp; |</P>
                  <ContactDiv>
                    <a
                      href='https://github.com/sven-gerlach'
                      title={'Link to Sven\'s GitHub profile page'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Img src={imgGitHub} alt='black & white GitHub logo' />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/svengerlach/'
                      title={'Link to Sven\'s LinkedIn page'}
                      target='_blank'
                      rel='noreferrer'
                    ><Img src={imgLinkedIn} alt='black & white LinkedIn logo' />
                    </a>
                  </ContactDiv>
                </TextContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <ScrollDown>
                  <div className="arrow" onClick={() => scroller.scrollTo('about', {
                    spy: 'true',
                    smooth: 'easeInOutQuad',
                    duration: 1500,
                    offset: -100
                  })}>
                  </div>
                </ScrollDown>
              </Col>
            </Row>
          </Container>
        </ImgContainer>
      </>
    )
  }
}

const ImgContainer = styled.div`
  background-image: url(${imgCode});
  background-size: cover;
  background-position: left;
  margin-top: 56px;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  background-color: rgba(250,250,250,0.6);
  padding: 30px;
  border-radius: 70px;
  color: rgb(0, 0, 0);
`

const H1 = styled.h1`
  font-size: 5rem;
  text-align: center;
  letter-spacing: 4px;
`

const P = styled.p`
  font-size: 1rem;
  text-align: center;
  letter-spacing: 1px;
`

const ContactDiv = styled.div`
  margin: 50px auto 0;
  text-align: center;
`

const Img = styled.img`
  height: 30px;
  margin: 0 20px;

  &:hover {
    cursor: pointer;
    animation: shake 1s;
  }

  &:active {
    transform: scale(0.8);
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`

const ScrollDown = styled.div`
  position: relative;
  bottom: -20vh;
  
  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    
    &:hover {
      cursor: pointer;
    }

    &:active {
      border-color: rgb(102, 131, 86);
      &:before {
        border-color: rgb(102, 131, 86);
      }
    }
  }

  .arrow:before {
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
`


export default LandingPage
