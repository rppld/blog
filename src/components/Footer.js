import React from 'react'
import styled from '@emotion/styled'
import { Text } from './Header'
import { device } from '../theme'
import { containerStyles } from './Header'

const Container = styled.footer`
  ${containerStyles};
  padding-top: var(--space-96);
  padding-bottom: var(--space-8);
`

const InnerContainer = styled.div`
  border-top: 1px solid #ccc;
  padding-top: var(--space-8);
  padding-bottom: env(safe-area-inset-bottom);

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
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
      <InnerContainer>
        <Text style={{ opacity: 0.5 }}>&copy; {year} Philipp Rappold</Text>
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
      </InnerContainer>
    </Container>
  )
}

export default Footer
