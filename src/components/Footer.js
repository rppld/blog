import React from 'react'
import styled from '@emotion/styled'
import { Text } from './Header'
import { device } from '../theme'
import { containerStyles } from './Header'

const Container = styled.footer`
  ${containerStyles};
  bottom: var(--space-8);
  padding-bottom: calc(env(safe-area-inset-bottom) - var(--space-8));
  justify-content: space-between;

  @media ${device.tablet} {
    bottom: var(--space-16);
  }
`

const ListItem = styled.li`
  display: inline;

  & + ${() => ListItem} {
    margin-left: var(--space-16);

    @media ${device.tablet} {
      margin-left: var(--space-32);
    }
  }
`

function Footer({ email }) {
  const now = new Date()
  const year = now.getFullYear()

  return (
    <Container className="menubar">
      <Text style={{ opacity: 0.5 }}>&copy; {year}</Text>
      <Text as="ul">
        <ListItem>
          <a href="https://www.instagram.com/philipprappold/">Instagram</a>
        </ListItem>
        <ListItem>
          <a href="https://twitter.com/rppld">Twitter</a>
        </ListItem>
        <ListItem>
          <a href={`mailto:${email}`}>Email</a>
        </ListItem>
      </Text>
    </Container>
  )
}

export default Footer
