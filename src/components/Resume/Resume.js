import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import ViewSDKClient from './ViewSDKClient'


class Resume extends Component {
  componentDidMount() {
    const viewSDKClient = new ViewSDKClient()
    viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      viewSDKClient.previewFile("pdf-div", {
        /* Pass the embed mode option here */
        embedMode: "IN_LINE"
      });
    });
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Element name='resume' className='element'><H2>RESUME</H2></Element>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="in-line-container">
              <div id="pdf-div" className="in-line-div"/>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

const H2 = styled.h2`
  color: rgb(202, 120, 50);
  text-align: center;
  margin: 60px auto;
  letter-spacing: 4px;
  border-radius: 20px;
  width: min(400px, 100%);
  padding: 10px 0;
`

export default Resume

