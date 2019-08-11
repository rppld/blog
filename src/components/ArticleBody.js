import React from 'react'
import styled from '@emotion/styled'
import Figure from '../components/Figure'
import { Heading } from '../components/Heading'
import { device } from '../theme'
import { createMarkup, getPaddingProps } from '../utils'
import { textStyles } from './Text'

const Container = styled.div`
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);

  @media ${device.laptop} {
    padding-top: var(--space-64);
    padding-bottom: var(--space-64);
  }

  ul,
  ol {
    ${textStyles};
    padding-left: var(--space-64);

    @media ${device.tablet} {
      padding-left: var(--space-64);
    }
  }

  p {
    ${textStyles};

    em {
      white-space: nowrap;
    }

    img {
      vertical-align: middle;
    }
  }

  figure {
    margin-top: var(--space-32);
    margin-bottom: var(--space-32);

    @media ${device.tablet} {
      margin-top: var(--space-64);
      margin-bottom: var(--space-64);
    }
  }
`

function ArticleBody({ title, blocks }) {
  return (
    <Container>
      <Heading inBody>{title}</Heading>

      {blocks.map(block =>
        block.__typename === 'ContentfulBlockText' ? (
          <div
            key={block.id}
            dangerouslySetInnerHTML={createMarkup(
              block.text.childMarkdownRemark.html,
              { renderInline: false }
            )}
          />
        ) : block.__typename === 'ContentfulBlockImage' ? (
          <Figure
            key={block.id}
            {...getPaddingProps(block.padding)}
            caption={block.caption}
            bgColor={block.backgroundColor}
            fluid={block.image.fluid}
          />
        ) : block.__typename === 'ContentfulBlockHeading' ? (
          <Heading key={block.id} as="h2">
            {block.heading}
          </Heading>
        ) : null
      )}
    </Container>
  )
}

export default ArticleBody
