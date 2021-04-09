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
                <P>I am a full-stack Software Engineering graduate at General Assembly, with experience in front-end and back-end coding, including JavaScript (Node, jQuery, Bootstrap), Python, HTML, CSS / SCSS, Git, and Bash.</P>
              </section>
              <SectionAfterImg>
                <H5>My Background</H5>
                <P>Prior to Software Development, I built a career in Investment Banking and Private Equity for 12 years, where I developed a broad skill base across fund-raising for multi-billion-dollar companies, project management to tight deadlines, originating new deals, and negotiating on behalf of clients. I also gained core technical skills, such as marketing a company’s core value proposition, deriving and defending corporate valuations, as well as finance, accounting, and corporate tax knowledge.</P>
                <H5 >What Drives Me</H5>
                <P>With 19 completed fund-raising, mergers, and acquisitions deals, with an aggregate deal value of $16bn, I have a strong track record in tech-enabled Business Services. I am passionate about technology-enhanced and subscription-based business models and I am looking to work with start-ups, developing a more robust business model that is both customer and investor centric.</P>
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
  color: rgb(102, 131, 86)
`

const ImgSven = styled.img`
  width: 150px;
  float: left;
  margin: 0 30px 50px 0;
  border-radius: 20px;
`

const P = styled.p`
  line-height: 30px;
  text-align: justify;
  margin-bottom: 50px;
`

const SectionAfterImg = styled.section`
  clear: left;
`

export default About
