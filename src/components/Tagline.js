import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { containerStyles, Text } from './Header'

const Container = styled.span`
  ${containerStyles};
  left: auto;
  top: var(--space-8);
  right: var(--space-8);
  text-align: right;
`

const StyledText = styled(Text)`
  font-style: italic;
`

function Tagline({ text }) {
  return (
    <Container className="menubar">
      <StyledText>
        <Link to="/about">{text}</Link>
      </StyledText>
    </Container>
  )
}

export default Tagline
