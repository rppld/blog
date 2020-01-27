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
  lede: string
  blocks: [Block]
}

const PostBody: React.FunctionComponent<Props> = ({ name, lede, blocks }) => (
  <article>
    <h1>{name}</h1>

    {lede && (
      <p
        className="lede"
        dangerouslySetInnerHTML={createMarkup(lede, { renderInline: true })}
      />
    )}

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
            alt={block.alt}
            src={getImageTransform(block.file, '100x0/filters:quality(50)')}
            srcWebp={getImageTransform(
              block.file,
              '100x0/filters:quality(50):format(webp)'
            )}
            srcSet={getImageSrcSet(block.file)}
            srcSetWebp={getImageSrcSet(block.file, 'filters:format(webp)')}
            sizes="(max-width: 768px) 80vw, 100vw"
            aspectRatio={getAspectRatioFromImageUrl(block.file)}
          />
        </Figure>
      ) : null
    )}

    <style jsx global>{`
      article {
        padding-top: var(--space-48);
      }

      article .lede {
        font-size: var(--fs-24);
        color: var(--color-text-meta);
        line-height: var(--lh-title);
        letter-spacing: -0.035em;
      }

      article pre,
      article code {
        font-size: 0.875em;
        font-family: Consolas, monaco, monospace;
      }

      article code {
        color: var(--color-gray-9);
        background-color: var(--color-yellow-2);
        border-radius: var(--space-4);
        padding-left: var(--space-4);
        padding-right: var(--space-4);
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
        font-weight: var(--fw-black);
        font-size: var(--fs-32);
      }

      article h1,
      article h2 {
        text-indent: -0.0125em;
        letter-spacing: -0.035em;
      }

      article h2,
      article h3,
      article h4 {
        font-weight: var(--fw-black);
        font-size: var(--fs-24);
        margin-top: var(--space-48);
      }

      article figure {
        margin-top: var(--space-24);
        margin-bottom: var(--space-24);
        padding: 0;
      }

      article > * + * {
        margin-top: var(--space-24);
      }

      article p {
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
        article {
          padding-top: var(--space-64);
        }

        article > * {
          padding-left: var(--space-32);
          padding-right: var(--space-32);
        }

        article .lede {
          font-size: var(--fs-32);
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

        article > * + * {
          margin-top: var(--space-32);
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
