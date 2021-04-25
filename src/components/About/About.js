import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components'
import sven from './../../lib/img/Sven_b&w.png'
import { Element } from 'react-scroll'

class About extends Component {
  render () {
    return (
      <>
        <Container className='mt-5'>
          <Row>
            <Col>
              <Element name='about' className='element'><H2>ABOUT</H2></Element>
              <section>
                <ImgSven src={sven} alt='black and white portrait of Sven' />
                <H5>Who am I?</H5>
                <p>
                  I am a full-stack Software Engineering graduate at General Assembly, with <b>four completed and deployed projects</b>, utilising <b>4 languages and 24 frameworks / libraries / utilities</b>. I have recently taken the JavaScript skill assessment where I ranked in the <b>top 5% of more than 1 million people</b> who took this timed test on LinkedIn.
                </p>
              </section>
              <SectionAfterImg>
                <H5>My Background</H5>
                <p>
                  Prior to Software Development, I built a career in Investment Banking and Private Equity for 12 years, where I developed a broad skill base, including:
                </p>
                <ul>
                  <li>Managing more than <b>10 projects</b> at a time,</li>
                  <li>Being key contact for <b>C-level executives</b> of multi-billion dollar companies,</li>
                  <li>Managing <b>teams</b> of 10 bankers,</li>
                  <li>Drafting and presenting deal documents to <b>C-level executives</b></li>
                  <li><b>Negotiating</b> on behalf of demanding clients</li>
                  <li>Building hundreds of Excel-based operating and valuation models</li>
                </ul>
                <H5>What Excites Me</H5>
                <ul>
                  <li>A long-run personal and professional <b>growth</b> trajectory</li>
                  <li>Writing <b>clean, human-readable and efficient</b> code</li>
                  <li>Algorithms, <b>machine learning</b>, AI and neural networks</li>
                  <li>Customer-friendly design of the UI with a <b>strong focus on UX</b></li>
                  <li>Understanding <b>complex systems</b> and process</li>
                </ul>
              </SectionAfterImg>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const H2 = styled.h2`
  color: rgb(202, 120, 50);
  text-align: center;
  margin: 30px 0 60px 0;
  letter-spacing: 4px;
`

const H5 = styled.h5`
  color: rgb(102, 131, 86);
  :last-of-type {
    margin-top: 50px;
  }
`

const ImgSven = styled.img`
  width: 150px;
  float: left;
  margin: 0 30px 30px 0;
  border-radius: 20px;
`

const SectionAfterImg = styled.section`
  clear: left;
`

export default About
