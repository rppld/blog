import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { device } from '../theme'
import { textStyles } from './Text'

const OuterWrap = styled.figure`
  position: relative;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transition: 400ms ease;

  img {
    vertical-align: middle;
    width: 100%;
  }
`

const InnerWrap = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  padding-top: ${props => (props.padTop ? '1rem' : '0')};
  padding-right: ${props => (props.padRight ? '1rem' : '0')};
  padding-bottom: ${props => (props.padBottom ? '1rem' : '0')};
  padding-left: ${props => (props.padLeft ? '1rem' : '0')};

  @media ${device.tablet} {
    padding-top: ${props => (props.padTop ? '2rem' : '0')};
    padding-right: ${props => (props.padRight ? '2rem' : '0')};
    padding-bottom: ${props => (props.padBottom ? '2rem' : '0')};
    padding-left: ${props => (props.padLeft ? '2rem' : '0')};
  }

  @media ${device.laptop} {
    padding-top: ${props => (props.padTop ? '4rem' : '0')};
    padding-right: ${props => (props.padRight ? '4rem' : '0')};
    padding-bottom: ${props => (props.padBottom ? '4rem' : '0')};
    padding-left: ${props => (props.padLeft ? '4rem' : '0')};
  }
`

const Caption = styled.figcaption`
  ${textStyles};
  color: var(--color-gray);
  margin-top: 0.5rem;
`

function Container(props) {
  return props.link ? (
    <OuterWrap>
      <Link to={props.link}>{props.children}</Link>
    </OuterWrap>
  ) : (
    <OuterWrap inBody={props.inBody}>{props.children}</OuterWrap>
  )
}

function Figure(props) {
  return (
    <Container link={props.link}>
      <InnerWrap
        bgColor={props.bgColor}
        padTop={props.padTop}
        padRight={props.padRight}
        padBottom={props.padBottom}
        padLeft={props.padLeft}
      >
        {props.fluid ? (
          <Img fluid={props.fluid} />
        ) : (
          <img src={props.src} alt="" />
        )}
      </InnerWrap>
      {props.caption && <Caption>{props.caption}</Caption>}
    </Container>
  )
}

Figure.propTypes = {
  src: PropTypes.string,
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  fluid: PropTypes.object,
}

export default Figure
