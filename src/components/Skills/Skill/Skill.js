import React, { Component } from 'react'
import styled from 'styled-components'
// Languages
import javascript from './../../../lib/img/skills/javascript.png'
import python from './../../../lib/img/skills/python.png'

// database
import mongodb from './../../../lib/img/skills/mongodb.png'
import mongoose from './../../../lib/img/skills/mongoose.png'
import postgresql from './../../../lib/img/skills/postgresql.png'

// front-end
import bootstrap from './../../../lib/img/skills/bootstrap.png'
import chartjs from './../../../lib/img/skills/chartjs.png'
import css from './../../../lib/img/skills/css.png'
import html5 from './../../../lib/img/skills/html5.png'
import jquery from './../../../lib/img/skills/jquery.png'
import react from './../../../lib/img/skills/react.png'
import sass from './../../../lib/img/skills/sass.png'
import styledcomponents from './../../../lib/img/skills/styledcomponents.png'

// back-end
import django from './../../../lib/img/skills/django.png'
import express from './../../../lib/img/skills/express.png'
import heroku from './../../../lib/img/skills/heroku.png'
import nodejs from './../../../lib/img/skills/nodejs.png'

// testing
import selenium from './../../../lib/img/skills/selenium_web_driver.png'

// other
import bash from './../../../lib/img/skills/bash.png'
import git from './../../../lib/img/skills/git.png'
import github from './../../../lib/img/skills/github.png'
import lodash from './../../../lib/img/skills/lodash.png'
import pipenv from './../../../lib/img/skills/pipenv.png'
import pygame from './../../../lib/img/skills/pygame.png'
import stripe from './../../../lib/img/skills/stripeconnect.png'


class Skill extends Component {
  render () {
    return (
      <>
        <ImgContainer>
          <Img src={javascript} alt='JavaScript logo' />
          <P>JavaScript</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={python} alt='Python logo' />
          <P>Python</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={mongodb} alt='MongoDB logo' />
          <P>MongoDB</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={mongoose} alt='Mongoose logo' />
          <P>Mongoose</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={postgresql} alt='PostgreSQL logo' />
          <P>PostgreSQL</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={bootstrap} alt='Bootstrap logo' />
          <P>Bootstrap</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={chartjs} alt='ChartJS logo' />
          <P>ChartJS</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={css} alt='CSS logo' />
          <P>CSS</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={html5} alt='HTML5 logo' />
          <P>HTML5</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={jquery} alt='JQuery logo' />
          <P>JQuery</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={react} alt='React logo' />
          <P>React</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={sass} alt='Sass logo' />
          <P>Sass</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={styledcomponents} alt='Styled Components logo' />
          <P>Styled Components</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={django} alt='Django logo' />
          <P>Django</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={express} alt='Express logo' />
          <P>Express</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={heroku} alt='Heroku logo' />
          <P>Heroku</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={nodejs} alt='NodeJS logo' />
          <P>NodeJS</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={selenium} alt='Selenium logo' />
          <P>Selenium</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={bash} alt='Bash logo' />
          <P>Bash</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={git} alt='Git logo' />
          <P>Git</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={github} alt='GitHub logo' />
          <P>GitHub</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={lodash} alt='Lodash logo' />
          <P>Lodash</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={pipenv} alt='PipeEnv logo' />
          <P>PipeEnv</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={pygame} alt='Pygame logo' />
          <P>Pygame</P>
        </ImgContainer>
        <ImgContainer>
          <Img src={stripe} alt='Stripe logo' />
          <P>Stripe</P>
        </ImgContainer>
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
  
`

const Img = styled.img`
  display: block;
  max-width: 80%;
  max-height: 100px;
  margin: 20px auto;
  text-align: center;
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

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`

export default Skill
