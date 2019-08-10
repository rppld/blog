import React from 'react'
import styled from '@emotion/styled'
import { space, fontSize, device } from '../theme'
import { containerStyles } from './Header'

const Container = styled.footer`
  ${containerStyles};
  bottom: ${space.s0};
  justify-content: space-between;
`

const ListItem = styled.li`
  display: inline;

  & + ${() => ListItem} {
    margin-left: ${space.s0};

    @media ${device.tablet} {
      margin-left: ${space.s1};
    }
  }
`

const Text = styled.p`
  font-size: ${fontSize.f0};

  @media ${device.tablet} {
    font-size: ${fontSize.f1};
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
