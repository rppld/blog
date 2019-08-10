import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { space, fontSize, device } from '../theme'

const wrapperStyles = css`
  position: fixed;
  z-index: 999;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: ${space.s1};
  padding-right: ${space.s1};
  pointer-events: none;

  @media ${device.tablet} {
    padding-left: ${space.s2};
    padding-right: ${space.s2};
  }

  @media ${device.laptopL} {
    padding-left: ${space.s3};
    padding-right: ${space.s3};
  }

  * {
    pointer-events: auto;
  }
`

const HeaderWrapper = styled.header`
  top: 0;
  padding-top: ${space.s0};
  justify-content: ${props => props.justifyContent};
  ${wrapperStyles};
`

const FooterWrapper = styled.footer`
  bottom: 0;
  padding-bottom: ${space.s0};
  justify-content: space-between;
  ${wrapperStyles};
`

const Paragraph = styled.p`
  margin: 0;
  font-size: ${fontSize.f0};
  text-align: ${props => props.textAlign} @media ${device.tablet} {
    font-size: ${fontSize.f1};
  }

  @media ${device.laptop} {
    font-size: ${fontSize.f2};
  }
`

export const Header = ({ author, title }) => (
  <HeaderWrapper
    className="menubar"
    justifyContent={
      author && title
        ? 'space-between'
        : author && !title
        ? 'flex-start'
        : 'flex-end'
    }
  >
    {author && (
      <Paragraph>
        <Link to="/">{author}</Link>
      </Paragraph>
    )}

    {title && (
      <Paragraph>
        <Link to="/about">{title}</Link>
      </Paragraph>
    )}
  </HeaderWrapper>
)

export function Footer(props) {
  const now = new Date()
  const year = now.getFullYear()

  return (
    <FooterWrapper className="menubar">
      <Paragraph style={{ opacity: 0.5 }}>&copy; {year}</Paragraph>

      <Paragraph>
        <a href={`mailto:${props.email}`}>Say Hi</a>
      </Paragraph>
    </FooterWrapper>
  )
}
