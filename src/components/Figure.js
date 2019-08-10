import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { space, color, device } from '../theme'
import { paragraphStyles } from './Paragraph'

const OuterWrap = styled.figure`
  position: relative;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transition: 400ms ease;
  margin-top: ${props => (props.inBody ? space.s2 : '0')};
  margin-bottom: ${props => (props.inBody ? space.s2 : '0')};

  @media ${device.tablet} {
    margin-top: ${props => (props.inBody ? space.s3 : '0')};
    margin-bottom: ${props => (props.inBody ? space.s3 : '0')};
  }

  img {
    vertical-align: middle;
    width: 100%;
  }
`

const Wrapper = props => {
  return props.link ? (
    <OuterWrap inBody={props.inBody}>
      <Link to={props.link}>{props.children}</Link>
    </OuterWrap>
  ) : (
    <OuterWrap inBody={props.inBody}>{props.children}</OuterWrap>
  )
}

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

export const Caption = styled.figcaption`
  ${paragraphStyles};
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.gray};
  padding-left: ${space.s1};
  padding-right: ${space.s1};
  margin-top: 0.5rem;

  @media ${device.tablet} {
    padding-left: ${space.s2};
    padding-right: ${space.s2};
  }

  @media ${device.laptop} {
    padding-left: ${space.s3};
    padding-right: ${space.s3};
  }
`

function Figure(props) {
  return (
    <Wrapper link={props.link} inBody={props.inBody}>
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
    </Wrapper>
  )
}

Figure.propTypes = {
  src: PropTypes.string,
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  fluid: PropTypes.object,
}

export default Figure
