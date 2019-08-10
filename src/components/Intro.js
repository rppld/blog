import React from 'react'
import styled from '@emotion/styled'
import { space, device } from '../theme'

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  padding: ${space.s1};
  display: flex;
  justify-content: center;
  transition: opacity 400ms;
  align-items: center;
  background-color: ${props => props.bgColor};

  img {
    max-width: 50vmin;
  }

  @media ${device.tablet} {
    padding: ${space.s2};
  }

  @media ${device.laptop} {
    padding: ${space.s3};
  }
`

function Intro(props) {
  return <Wrapper bgColor={props.bgColor}>{props.children}</Wrapper>
}

export default Intro
