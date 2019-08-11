import React from 'react'
import styled from '@emotion/styled'
import { device } from '../theme'
import { containerStyles, Text } from './Header'

const Container = styled.span`
  ${containerStyles};
  left: auto;
  top: var(--space-8);
  text-align: right;

  @media ${device.tablet} {
    left: auto;
    top: var(--space-16);
  }
`

const StyledText = styled(Text)`
  font-style: italic;
`

function Tagline({ text }) {
  return (
    <Container className="menubar">
      <StyledText style={{ opacity: 0.5 }}>{text}</StyledText>
    </Container>
  )
}

export default Tagline
