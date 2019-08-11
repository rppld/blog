import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};

  img {
    max-width: 50vmin;
  }

  * {
    margin: 0;
  }
`

function Intro(props) {
  return <Container bgColor={props.bgColor}>{props.children}</Container>
}

export default Intro
