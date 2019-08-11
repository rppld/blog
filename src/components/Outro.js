import React from 'react'
import styled from '@emotion/styled'
import { containerStyles } from './Intro'

const Container = styled.div`
  ${containerStyles};
`

function Outro(props) {
  return <Container>{props.children}</Container>
}

export default Outro
