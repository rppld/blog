import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const containerStyles = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
