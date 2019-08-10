import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Figure from '../components/Figure'
import { Heading } from '../components/Heading'
import { space, letterSpacing, fontSize, color, device } from '../theme'
import { createMarkup, getPaddingProps } from '../utils'

const paragraphStyles = css`
  hyphens: auto;
  letter-spacing: ${letterSpacing.ls1};
  text-align: ${props => (props.textCenter ? 'center' : 'left')};
  font-weight: 400;
  font-size: ${fontSize.f1};
  padding-left: ${space.s1};
  padding-right: ${space.s1};
  margin-top: 0;
  margin-bottom: ${space.s2};
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.nearBlack};

  @media ${device.mobileL} {
    font-size: ${fontSize.f2};
  }

  @media ${device.tablet} {
    font-size: ${fontSize.f3};
    padding-left: ${space.s2};
    padding-right: ${space.s2};
  }

  @media ${device.laptop} {
    padding-left: ${space.s3};
    padding-right: ${space.s3};
  }

  @media ${device.laptopL} {
    font-size: ${fontSize.f4};
  }
`

const Wrapper = styled.div`
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};

  @media ${device.laptop} {
    padding-top: ${space.s3};
    padding-bottom: ${space.s3};
  }

  ul,
  ol {
    ${paragraphStyles};
    padding-left: ${space.s3};

    @media ${device.tablet} {
      padding-left: ${space.s3};
    }
  }

  p {
    ${paragraphStyles};

    em {
      white-space: nowrap;
    }

    img {
      vertical-align: middle;
    }
  }
`

function Body({ title, blocks }) {
  return (
    <Wrapper>
      <Heading inBody>{title}</Heading>

      {blocks.map(block =>
        block.__typename === 'ContentfulBlockText' ? (
          <div
            key={block.id}
            dangerouslySetInnerHTML={createMarkup(
              block.text.childMarkdownRemark.html
            )}
          />
        ) : block.__typename === 'ContentfulBlockImage' ? (
          <Figure
            key={block.id}
            {...getPaddingProps(block.padding)}
            inBody
            caption={block.caption}
            bgColor={block.backgroundColor}
            fluid={block.image.fluid}
          />
        ) : block.__typename === 'ContentfulBlockHeading' ? (
          <Heading inBody secondary key={block.id} as="h2">
            {block.heading}
          </Heading>
        ) : null
      )}
    </Wrapper>
  )
}

export default Body
