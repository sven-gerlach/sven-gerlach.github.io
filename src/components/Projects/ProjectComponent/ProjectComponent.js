import React, {Component} from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import GitHubLogo from './../../../lib/img/GitHub_white-bg.png'
import { v4 as uuid } from 'uuid'

class ProjectComponent extends Component {
  render () {
    const { img, title, description, technologies, buttons } = this.props

    const descriptionJSX = []
    for (const line of description) {
      descriptionJSX.push(<li key={uuid()}>{line}</li>)
    }

    const technologiesJSX = []
    for (const line of technologies) {
      technologiesJSX.push(<li key={uuid()}>{line}</li>)
    }

    const buttonsJSX = []
    for (const button of buttons) {
      buttonsJSX.push(
        <LinkStyled
          key={uuid()}
          href={button.href}
          title={button.title}
          target='_blank'
          rel='noreferrer'
        >
          {
            button.buttonName === 'App'
            ? <ButtonStyled variant="primary">{button.buttonName}</ButtonStyled>
            : <ButtonStyled variant="primary"><Img src={GitHubLogo} />{button.buttonName}</ButtonStyled>

          }
        </LinkStyled>
      )
    }

    return (
      <OuterContainer>
        <CardStyled>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <h6>Description</h6>
            <ul>
              {descriptionJSX}
            </ul>
            <h6>Technologies</h6>
            <UlStyled>
              {technologiesJSX}
            </UlStyled>
            <ButtonDiv>
              {buttonsJSX}
            </ButtonDiv>
          </Card.Body>
        </CardStyled>
      </OuterContainer>
    )
  }
}

const OuterContainer = styled.div`
  position: relative;
  height: 100%;
`

const CardStyled = styled(Card)`
  height: 100%;
  padding-bottom: 40px;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: calc(100% - 2 * 1.25rem);
  bottom: 1.25rem;
`

const LinkStyled = styled.a`
  flex: 1 1 50px;
  margin: 0 6px;
  text-decoration: none !important;
`

const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  & li {
    flex: 0 32%;
    height: 30px;
    margin-bottom: calc((100px - 32px * 3px) / 2);
    
    @media (max-width: 520px) {
      flex: 0 49%;
    }
  }
`

const ButtonStyled = styled.button`
  padding: 5px 5px;
  background-color: rgb(133, 96, 154);
  width: 100%;
  border: none;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms ease-in-out;
  
  :hover {
    background-color: rgb(113, 76, 134);
  }
  :active {
    background-color: rgb(113, 76, 134);
    transition: none;
  }
  
  @media (max-width: 480px) {
    img {
      display: none;
    }
  }
`

const Img = styled.img`
  height: 20px;
  margin-right: 10px;
  object-fit: cover;
  object-position: 50% 50%;
`

export default ProjectComponent
