import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { device } from '../theme'

export const containerStyles = css`
  min-height: 100vh;
  text-align: center;
  padding: var(--space-16);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: var(--space-32);
  }

  @media ${device.laptop} {
    padding: var(--space-64);
  }
`

const Container = styled.div`
  ${containerStyles};
  background-color: ${props => props.bgColor};

  img {
    max-width: 50vmin;
  }
`

function Intro(props) {
  return <Container bgColor={props.bgColor}>{props.children}</Container>
}

export default Intro
