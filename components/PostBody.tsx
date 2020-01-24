import * as React from 'react'
import device from '../theme/device'
import { Block } from '../types'
import Figure from './Figure'
import Image from './Image'
import createMarkup from '../utils/create-markup'
import {
  getImageTransform,
  getAspectRatioFromImageUrl,
  getImageSrcSet,
} from '../utils/storyblok'

interface Props {
  name: string
  blocks: [Block]
}

const PostBody: React.FunctionComponent<Props> = ({ name, blocks }) => (
  <article>
    <h1>{name}</h1>

    {blocks.map(block =>
      block.component === 'paragraph' ? (
        <p
          key={block._uid}
          dangerouslySetInnerHTML={createMarkup(block.text, {
            renderInline: true,
          })}
        />
      ) : block.component === 'heading' ? (
        <h2
          key={block._uid}
          dangerouslySetInnerHTML={createMarkup(block.text, {
            renderInline: true,
          })}
        />
      ) : block.component === 'image' ? (
        <Figure
          caption={block.caption}
          key={block._uid}
          padding={block.padding}
          bgColor={block.background_color}
        >
          <Image
            key={block._uid}
            src={getImageTransform(block.file, '100x0/filters:quality(50)')}
            aspectRatio={getAspectRatioFromImageUrl(block.file)}
            alt={block.alt}
            sizes="(max-width: 768px) 80vw, 100vw"
            srcSet={getImageSrcSet(block.file)}
          />
        </Figure>
      ) : null
    )}

    <style jsx global>{`
      article {
        padding-top: var(--space-64);
      }

      article > * {
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
      }

      article h1,
      article h2,
      article h3,
      article h4 {
        font-weight: var(--fw-bold);
      }

      article h1 {
        font-size: var(--fs-32);
      }

      article h1,
      article h2 {
        transform: translateX(-1px); /* Optical alignment */
      }

      article h2,
      article h3,
      article h4 {
        font-size: var(--fs-24);
        margin-top: var(--space-64);
      }

      article figure {
        margin-top: var(--space-32);
        margin-bottom: var(--space-32);
        padding: 0;
      }

      article > * + * {
        margin-top: var(--space-32);
      }

      article p {
        hyphens: auto;
        letter-spacing: var(--ls-1);
        font-weight: 400;
        font-size: var(--fs-18);
      }

      @media ${device.mobileLg} {
        article p {
          font-size: var(--fs-20);
        }
      }

      @media ${device.tablet} {
        article > * {
          padding-left: var(--space-32);
          padding-right: var(--space-32);
        }

        article h1 {
          font-size: var(--fs-48);
        }

        article h2,
        article h3,
        article h4 {
          font-size: var(--fs-32);
          margin-top: var(--space-64);
        }

        article figure {
          margin-top: var(--space-64);
          margin-bottom: var(--space-64);
        }

        article p {
          font-size: var(--fs-24);
        }
      }

      @media ${device.laptop} {
        article > * {
          padding-left: var(--space-64);
          padding-right: var(--space-64);
        }
      }
    `}</style>
  </article>
)

export default PostBody
